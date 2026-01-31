/*
  Warnings:

  - The primary key for the `funhub_application` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `funhub_application` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `funhub_category` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `funhub_category` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Changed the type of `categoryId` on the `funhub_application` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE "funhub_application" DROP CONSTRAINT "funhub_application_categoryId_fkey";

-- AlterTable
ALTER TABLE "funhub_application" DROP CONSTRAINT "funhub_application_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
DROP COLUMN "categoryId",
ADD COLUMN     "categoryId" INTEGER NOT NULL,
ADD CONSTRAINT "funhub_application_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "funhub_category" DROP CONSTRAINT "funhub_category_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "funhub_category_pkey" PRIMARY KEY ("id");

-- AddForeignKey
ALTER TABLE "funhub_application" ADD CONSTRAINT "funhub_application_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "funhub_category"("id") ON DELETE CASCADE ON UPDATE CASCADE;

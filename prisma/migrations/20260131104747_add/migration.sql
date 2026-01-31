-- CreateEnum
CREATE TYPE "FunHubApplicationStatus" AS ENUM ('Active', 'Inactive', 'Archived', 'Maintenance');

-- AlterTable
ALTER TABLE "funhub_application" ADD COLUMN     "status" "FunHubApplicationStatus" NOT NULL DEFAULT 'Active';

-- CreateTable
CREATE TABLE "funhub_category" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "imageUrl" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "funhub_category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "funhub_application" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "imageUrl" TEXT,
    "categoryId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "funhub_application_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "funhub_category_name_key" ON "funhub_category"("name");

-- CreateIndex
CREATE UNIQUE INDEX "funhub_application_url_key" ON "funhub_application"("url");

-- AddForeignKey
ALTER TABLE "funhub_application" ADD CONSTRAINT "funhub_application_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "funhub_category"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- CreateTable
CREATE TABLE "blogs" (
    "id" SERIAL NOT NULL,
    "text_en" TEXT NOT NULL,
    "text_ar" TEXT NOT NULL,

    CONSTRAINT "blogs_pkey" PRIMARY KEY ("id")
);

/*
  Warnings:

  - You are about to drop the `Translation` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterTable
ALTER TABLE "User" ALTER COLUMN "password" DROP NOT NULL;

-- DropTable
DROP TABLE "Translation";

-- CreateTable
CREATE TABLE "Question" (
    "id" SERIAL NOT NULL,
    "question_ar" TEXT NOT NULL,
    "question_en" TEXT NOT NULL,
    "answer_ar" TEXT NOT NULL,
    "answer_en" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Question_pkey" PRIMARY KEY ("id")
);

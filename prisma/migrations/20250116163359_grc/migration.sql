/*
  Warnings:

  - Added the required column `active` to the `Cit` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Cit" ADD COLUMN     "active" BOOLEAN NOT NULL;

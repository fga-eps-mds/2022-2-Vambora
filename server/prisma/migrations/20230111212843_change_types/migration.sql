/*
  Warnings:

  - Added the required column `createdBy` to the `Route` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Route" DROP CONSTRAINT "Route_userId_fkey";

-- AlterTable
ALTER TABLE "Route" ADD COLUMN     "createdBy" TEXT NOT NULL;

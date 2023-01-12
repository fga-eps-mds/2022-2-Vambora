/*
  Warnings:

  - Added the required column `neighbourhoodOrigin` to the `Route` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Route" ADD COLUMN     "neighbourhoodOrigin" TEXT NOT NULL;

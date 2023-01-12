/*
  Warnings:

  - You are about to drop the column `neighbourhoodOrigin` on the `Route` table. All the data in the column will be lost.
  - Added the required column `neighborhoodOrigin` to the `Route` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Route" DROP COLUMN "neighbourhoodOrigin",
ADD COLUMN     "neighborhoodOrigin" TEXT NOT NULL;

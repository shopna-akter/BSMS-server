/*
  Warnings:

  - Changed the type of `status` on the `Service` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
-- 1. Create enum
CREATE TYPE "ServiceStatus" AS ENUM ('pending', 'in_progress', 'done');

-- 2. Alter column to enum
ALTER TABLE "Service"
ALTER COLUMN "status" TYPE "ServiceStatus" USING "status"::text::"ServiceStatus";

/*
  Warnings:

  - A unique constraint covering the columns `[address]` on the table `School` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `School_address_key` ON `School`(`address`);

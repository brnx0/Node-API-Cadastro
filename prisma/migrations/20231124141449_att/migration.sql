/*
  Warnings:

  - You are about to drop the column `data_atualicao` on the `users` table. All the data in the column will be lost.
  - Added the required column `senha` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "users" DROP COLUMN "data_atualicao",
ADD COLUMN     "data_atualizacao" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "senha" TEXT NOT NULL;

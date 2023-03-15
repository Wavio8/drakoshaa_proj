/*
  Warnings:

  - You are about to drop the column `published` on the `Post` table. All the data in the column will be lost.
  - Added the required column `login` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Post" DROP COLUMN "published";

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "login" TEXT NOT NULL,
ADD COLUMN     "password" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "Friend" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "rating" INTEGER NOT NULL,
    "clientId" INTEGER,

    CONSTRAINT "Friend_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Skill" (
    "id" SERIAL NOT NULL,
    "skill" TEXT NOT NULL,
    "studentId" INTEGER,
    "level" INTEGER NOT NULL,

    CONSTRAINT "Skill_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Project" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "link" TEXT NOT NULL,
    "friendId" INTEGER NOT NULL,

    CONSTRAINT "Project_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Project_friendId_key" ON "Project"("friendId");

-- AddForeignKey
ALTER TABLE "Friend" ADD CONSTRAINT "Friend_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Skill" ADD CONSTRAINT "Skill_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "Friend"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Project" ADD CONSTRAINT "Project_friendId_fkey" FOREIGN KEY ("friendId") REFERENCES "Friend"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

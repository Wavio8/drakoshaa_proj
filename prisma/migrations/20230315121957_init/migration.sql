/*
  Warnings:

  - You are about to drop the column `studentId` on the `Skill` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Skill" DROP CONSTRAINT "Skill_studentId_fkey";

-- AlterTable
ALTER TABLE "Skill" DROP COLUMN "studentId";

-- CreateTable
CREATE TABLE "_FriendToSkill" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_FriendToSkill_AB_unique" ON "_FriendToSkill"("A", "B");

-- CreateIndex
CREATE INDEX "_FriendToSkill_B_index" ON "_FriendToSkill"("B");

-- AddForeignKey
ALTER TABLE "_FriendToSkill" ADD CONSTRAINT "_FriendToSkill_A_fkey" FOREIGN KEY ("A") REFERENCES "Friend"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FriendToSkill" ADD CONSTRAINT "_FriendToSkill_B_fkey" FOREIGN KEY ("B") REFERENCES "Skill"("id") ON DELETE CASCADE ON UPDATE CASCADE;

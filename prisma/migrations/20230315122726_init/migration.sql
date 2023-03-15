/*
  Warnings:

  - You are about to drop the `_FriendToSkill` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_FriendToSkill" DROP CONSTRAINT "_FriendToSkill_A_fkey";

-- DropForeignKey
ALTER TABLE "_FriendToSkill" DROP CONSTRAINT "_FriendToSkill_B_fkey";

-- DropTable
DROP TABLE "_FriendToSkill";

-- CreateTable
CREATE TABLE "FriendToSkill" (
    "id" SERIAL NOT NULL,
    "studentId" INTEGER,
    "skillId" INTEGER,

    CONSTRAINT "FriendToSkill_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "FriendToSkill" ADD CONSTRAINT "FriendToSkill_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "Friend"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FriendToSkill" ADD CONSTRAINT "FriendToSkill_skillId_fkey" FOREIGN KEY ("skillId") REFERENCES "Skill"("id") ON DELETE SET NULL ON UPDATE CASCADE;

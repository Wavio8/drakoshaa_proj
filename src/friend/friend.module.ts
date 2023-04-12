import { Module } from '@nestjs/common';
import { FriendController } from './friend.controller';
import { FriendService } from './friend.service';
import { PrismaService } from '../prisma.service';
import { FriendToSkillService } from './friendToSkill.service';

@Module({
  controllers: [FriendController],
  providers: [FriendService, PrismaService, FriendToSkillService],
})
export class FriendModule {}

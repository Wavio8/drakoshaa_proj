import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Prisma, FriendToSkill } from '@prisma/client';

@Injectable()
export class FriendToSkillService {
  constructor(private prisma: PrismaService) {}

  async friendToSkill(
    friendToSkillWhereUniqueInput: Prisma.FriendToSkillWhereUniqueInput,
  ): Promise<FriendToSkill | null> {
    return this.prisma.friendToSkill.findUnique({
      where: friendToSkillWhereUniqueInput,
    });
  }

  async friendsToSkill(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.FriendToSkillWhereUniqueInput;
    where?: Prisma.FriendToSkillWhereInput;
    orderBy?: Prisma.FriendToSkillOrderByWithRelationInput;
  }): Promise<FriendToSkill[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.friendToSkill.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async createFriendToSkill(
    data: Prisma.FriendToSkillCreateInput,
  ): Promise<FriendToSkill> {
    return this.prisma.friendToSkill.create({
      data,
    });
  }

  async updateFriendToSkill(params: {
    where: Prisma.FriendToSkillWhereUniqueInput;
    data: Prisma.FriendToSkillUpdateInput;
  }): Promise<FriendToSkill> {
    const { where, data } = params;
    return this.prisma.friendToSkill.update({
      data,
      where,
    });
  }

  async deleteFriendToSkill(
    where: Prisma.FriendToSkillWhereUniqueInput,
  ): Promise<FriendToSkill> {
    return this.prisma.friendToSkill.delete({
      where,
    });
  }
}

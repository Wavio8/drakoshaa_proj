import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { User, Prisma, Friend } from "@prisma/client";

@Injectable()
export class FriendService {
  constructor(private prisma: PrismaService) {}

  async friend(
    friendWhereUniqueInput: Prisma.FriendWhereUniqueInput,
  ): Promise<Friend | null> {
    return this.prisma.friend.findUnique({
      where: friendWhereUniqueInput,
    });
  }

  async friends(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.FriendWhereUniqueInput;
    where?: Prisma.FriendWhereInput;
    orderBy?: Prisma.FriendOrderByWithRelationInput;
  }): Promise<Friend[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.friend.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async createFriend(data: Prisma.FriendCreateInput): Promise<Friend> {
    return this.prisma.friend.create({
      data,
    });
  }

  async updateFriend(params: {
    where: Prisma.FriendWhereUniqueInput;
    data: Prisma.FriendUpdateInput;
  }): Promise<Friend> {
    const { where, data } = params;
    return this.prisma.friend.update({
      data,
      where,
    });
  }

  async deleteFriend(where: Prisma.FriendWhereUniqueInput): Promise<Friend> {
    return this.prisma.friend.delete({
      where,
    });
  }
}
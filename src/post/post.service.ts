import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Posts, Prisma } from '@prisma/client';

@Injectable()
export class PostService {
  constructor(private prisma: PrismaService) {}

  async post(
    postWhereUniqueInput: Prisma.PostsWhereUniqueInput,
  ): Promise<Posts | null> {
    return this.prisma.posts.findUnique({
      where: postWhereUniqueInput,
    });
  }

  async posts(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.PostsWhereUniqueInput;
    where?: Prisma.PostsWhereInput;
    orderBy?: Prisma.PostsOrderByWithRelationInput;
  }): Promise<Posts[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.posts.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async createPost(data: Prisma.PostsCreateInput): Promise<Posts> {
    return this.prisma.posts.create({
      data,
    });
  }

  async updatePost(params: {
    where: Prisma.PostsWhereUniqueInput;
    data: Prisma.PostsUpdateInput;
  }): Promise<Posts> {
    const { data, where } = params;
    return this.prisma.posts.update({
      data,
      where,
    });
  }

  async deletePost(where: Prisma.PostsWhereUniqueInput): Promise<Posts> {
    return this.prisma.posts.delete({
      where,
    });
  }
}
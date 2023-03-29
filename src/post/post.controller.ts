import {
  Controller,
  Get,
  Delete,
  NotImplementedException,
  Post,
  Query,
  Param,
  Body,
  Put,
} from '@nestjs/common';
import { PostService } from './post.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Friend, Posts, User } from '@prisma/client';

@ApiTags('Post')
@Controller('post')
export class PostController {
  constructor(private postService: PostService) {}

  @ApiOperation({
    summary: 'Get all posts',
  })
  @ApiResponse({
    status: 501,
    description: 'Not implemented',
  })
  @ApiResponse({
    status: 200,
    description: 'OK',
  })
  @Get('all')
  public async getAllPosts(): Promise<Posts[]> {
    throw new NotImplementedException();
  }
  @ApiOperation({
    summary: 'Get post by ID',
  })
  @ApiResponse({
    status: 501,
    description: 'Not implemented',
  })
  @ApiResponse({
    status: 200,
    description: 'OK',
  })
  @Get('/:id')
  public async getPostById(@Param('id') id: number): Promise<User> {
    throw new NotImplementedException();
  }
  @ApiOperation({
    summary: 'Get filtered Posts',
  })
  @ApiResponse({
    status: 501,
    description: 'Not implemented',
  })
  @ApiResponse({
    status: 200,
    description: 'OK',
  })
  @Get('/:filter')
  public async getFilteredPosts(
    @Param('filter') filter: string,
  ): Promise<Posts> {
    throw new NotImplementedException();
  }

  @ApiOperation({
    summary: 'Add a new Post',
  })
  @ApiResponse({
    status: 501,
    description: 'Not implemented',
  })
  @ApiResponse({
    status: 200,
    description: 'OK',
  })
  @Post('add')
  public async addPost(
    @Body() postsData: { title: string; content?: string; authorId: number },
  ): Promise<Posts> {
    throw new NotImplementedException();
  }

  @ApiOperation({
    summary: 'Update Post by ID',
  })
  @ApiResponse({
    status: 501,
    description: 'Not implemented',
  })
  @ApiResponse({
    status: 200,
    description: 'OK',
  })
  @Put('update/:id')
  async UpdatePost(@Param('id') id: number): Promise<Posts> {
    throw new NotImplementedException();
  }
  @ApiOperation({
    summary: 'Delete post by ID',
  })
  @ApiResponse({
    status: 501,
    description: 'Not implemented',
  })
  @ApiResponse({
    status: 200,
    description: 'OK',
  })
  @Delete('delete/:id')
  public async deletePostById(@Param('id') id: number): Promise<Posts> {
    throw new NotImplementedException();
  }
}

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
  HttpException,
  HttpStatus,
  UseFilters,
} from '@nestjs/common';
import { PostService } from './post.service';
import {
  ApiBasicAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { Posts } from '@prisma/client';
import { PostDto } from './dto/post.dto';
import { HttpExceptionFilter } from '../HttpExceptionFilter';

@ApiBasicAuth()
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
    return this.postService.posts({});
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
  public async getPostById(@Param('id') id: number): Promise<Posts> {
    return this.postService.post({ id: Number(id) });
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
  ): Promise<Posts[]> {
    return this.postService.posts({
      where: {
        OR: [
          {
            title: { contains: filter },
          },
          {
            content: { contains: filter },
          },
        ],
      },
    });
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
  public async addPost(@Body() postData: PostDto): Promise<Posts> {
    const { title, content, authorId } = postData;
    return this.postService.createPost({
      title,
      content,
      author: {
        connect: { id: authorId },
      },
    });
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
  @Delete('/:id')
  @UseFilters(new HttpExceptionFilter())
  public async deletePostById(@Param('id') id: number): Promise<Posts> {
    try {
      return await this.postService.deletePost({ id: Number(id) });
    } catch (error) {
      throw new HttpException('Post not exist', HttpStatus.BAD_REQUEST);
    }

    // const findPost = this.postService.post({ id: Number(id) });
    // if (findPost != null) {
    //   return this.postService.deletePost({ id: Number(id) });
    // } else {
    //   throw new HttpException('Post not exist', HttpStatus.BAD_REQUEST);
    // }
  }
}

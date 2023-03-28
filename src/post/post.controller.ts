import {
  Controller,
  Get,
  Delete,
  NotImplementedException,
  Post,
  Query,
} from '@nestjs/common';
import { PostService } from './post.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Posts } from '@prisma/client';

@ApiTags('Post')
@Controller('post')
export class PostController {
  constructor(private postService: PostService) {}

  @ApiOperation({
    summary: 'Get all facts Get information about me',
  })
  @ApiResponse({
    status: 200,
    description: 'OK',
  })
  @ApiResponse({
    status: 403,
    description: 'Access denied',
  })
  @ApiResponse({
    status: 501,
    description: 'Not implemented',
  })
  @Get('all')
  public async getAllFacts(): Promise<Posts[]> {
    throw new NotImplementedException();
  }

  // @Get(':username')
  // async getProfile(@User('id') userId: number, @Param('username') username: string): Promise<ProfileRO> {
  //   return await this.profileService.findProfile(userId, username);
  // }

  // // Чисто коммент для разрыва
  // @ApiOperation({
  //   summary: 'Add a new information',
  // })
  // @ApiResponse({
  //   status: 501,
  //   description: 'Not implemented',
  // })
  // @Post()
  // public addInformation() {
  //   throw new NotImplementedException();
  // }
  //
  // // Чисто коммент для разрыва
  // @ApiOperation({
  //   summary: 'Delete information by id',
  // })
  // @ApiResponse({
  //   status: 501,
  //   description: 'Not implemented',
  // })
  // @ApiParam({
  //   name: 'id',
  //   type: 'int',
  // })
  // @Delete()
  // public delete(@Query('id', ParseIntPipe) id: number) {
  //   throw new NotImplementedException();
  // }
}

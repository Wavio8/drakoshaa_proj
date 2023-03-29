import {
  Controller,
  Get,
  Delete,
  NotImplementedException,
  Post,
  Query,
  Param,
  Body,
} from '@nestjs/common';
import { FriendService } from './friend.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Friend, User } from '@prisma/client';

@ApiTags('Friend')
@Controller('friend')
export class FriendController {
  constructor(private friendService: FriendService) {}

  @ApiOperation({
    summary: 'Get all friends',
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
  public async getAllFriends(): Promise<Friend[]> {
    throw new NotImplementedException();
  }

  @ApiOperation({
    summary: 'Get friend by name',
  })
  @ApiResponse({
    status: 501,
    description: 'Not implemented',
  })
  @ApiResponse({
    status: 200,
    description: 'OK',
  })
  @Get('/:name')
  public async getFriendByName(@Param('name') name: string): Promise<Friend> {
    throw new NotImplementedException();
  }

  @ApiOperation({
    summary: 'Add a new Friend',
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
  public async addFriend(
    @Body() id: number,
    rating: number,
    name: string,
  ): Promise<Friend> {
    throw new NotImplementedException();
  }
  @ApiOperation({
    summary: 'Delete friend by ID',
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
  public async deleteFriendById(@Param('id') id: number): Promise<Friend> {
    throw new NotImplementedException();
  }
}

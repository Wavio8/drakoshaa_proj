import {
  Controller,
  Get,
  Delete,
  NotImplementedException,
  Post,
  Query,
} from '@nestjs/common';
import { FriendService } from './friend.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Friend } from '@prisma/client';

@ApiTags('Friend')
@Controller('friend')
export class FriendController {
  constructor(private friendService: FriendService) {}

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
  public async getAllFriends(): Promise<Friend[]> {
    throw new NotImplementedException();
  }
}

import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
} from '@nestjs/common';
import { FriendService } from './friend.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Friend, FriendToSkill } from '@prisma/client';
import { FriendDto } from './dto/friend.dto';
import { FriendToSkillDto } from './dto/friendToSkill.dto';
import { FriendToSkillService } from './friendToSkill.service';
import { StudentSkillDto } from './dto/studentSkill.dto';

@ApiTags('Friend')
@Controller('friend')
export class FriendController {
  constructor(
    private friendService: FriendService,
    private friendToSkillService: FriendToSkillService,
  ) {}

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
    return this.friendService.friends({});
  }

  @ApiOperation({
    summary: 'Get all friendsToSkill',
  })
  @ApiResponse({
    status: 501,
    description: 'Not implemented',
  })
  @ApiResponse({
    status: 200,
    description: 'OK',
  })
  @Get('toSkill/all')
  public async getAllFriendsToSkill(): Promise<FriendToSkill[]> {
    return this.friendToSkillService.friendsToSkill({});
  }

  @ApiOperation({
    summary: 'Get friend by ID',
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
  public async getFriendById(
    @Param('id') id: number,
  ): Promise<FriendToSkillDto> {
    const friendWithSkill = new FriendToSkillDto();
    friendWithSkill.skills = await this.friendToSkillService.friendsToSkill({
      where: { studentId: Number(id) },
    });

    friendWithSkill.friend = await this.friendService.friend({ id: Number(id) });
    return friendWithSkill;
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
  public async addFriend(@Body() friendData: FriendDto): Promise<Friend> {
    const { name, rating, clientId } = friendData;
    return this.friendService.createFriend({
      name,
      rating,
      client: {
        connect: { id: clientId },
      },
    });
  }

  @ApiOperation({
    summary: 'Add a new FriendToSkill',
  })
  @ApiResponse({
    status: 501,
    description: 'Not implemented',
  })
  @ApiResponse({
    status: 200,
    description: 'OK',
  })
  @Post('toSkill/add')
  public async addFriendToSkill(
    @Body() friendData: StudentSkillDto,
  ): Promise<FriendToSkill> {
    const { studentId, skillId } = friendData;
    return this.friendToSkillService.createFriendToSkill({
      client: {
        connect: { id: studentId },
      },
      skill: {
        connect: { id: skillId },
      },
    });
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
  @Delete('/:id')
  public async deleteFriendById(@Param('id') id: number): Promise<Friend> {
    const findFriend = this.friendService.friend({ id: Number(id) });
    if (findFriend != null) {
      return this.friendService.deleteFriend({ id: Number(id) });
    } else {
      throw new HttpException('Friend not exist', HttpStatus.BAD_REQUEST);
    }
  }
}

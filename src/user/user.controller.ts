import {
  Controller,
  Get,
  Delete,
  NotImplementedException,
  Post,
  Query,
  Param,
  Body,
  HttpException,
  HttpStatus,
} from '@nestjs/common';

import {
  ApiBasicAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { User } from '@prisma/client';

import { UserService } from './user.service';
import { UserDto } from './dto/user.dto';

@ApiBasicAuth()
@ApiTags('User')
@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @ApiOperation({
    summary: 'Get all users',
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
  public async getAllUsers(): Promise<User[]> {
    return this.userService.users({});
  }

  @ApiOperation({
    summary: 'Get user by ID',
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
  public async getUserById(@Param('id') id: number): Promise<User> {
    return this.userService.user({ id: Number(id) });
  }

  @ApiOperation({
    summary: 'Add a new User',
  })
  @ApiResponse({
    status: 201,
    description: 'User created',
  })
  @ApiResponse({
    status: 200,
    description: 'OK',
  })
  @Post('add')
  public async addUser(
    @Body()
    userData: UserDto,
  ): Promise<User> {
    return this.userService.createUser(userData);
  }

  @ApiOperation({
    summary: 'Delete user by ID',
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
  public async deleteUserById(@Param('id') id: number): Promise<User> {
    const findUser = this.userService.user({ id: Number(id) });
    if (findUser != null) {
      return this.userService.deleteUser({ id: Number(id) });
    } else {
      throw new HttpException('User not exist', HttpStatus.BAD_REQUEST);
    }
  }
}

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

import { ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { User } from '@prisma/client';

import { UserService } from './user.service';

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
    throw new NotImplementedException();
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
    throw new NotImplementedException();
  }

  @ApiOperation({
    summary: 'Add a new User',
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
  public async addUser(
    @Body() id: number,
    email: string,
    name: string,
  ): Promise<User> {
    throw new NotImplementedException();
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
  @Delete('delete/:id')
  public async deleteUserById(@Param('id') id: number): Promise<User> {
    throw new NotImplementedException();
  }
}

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

import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Skill, User } from '@prisma/client';

import { SkillService } from './skill.service';

@ApiTags('Skill')
@Controller('skill')
export class SkillController {
  constructor(private skillService: SkillService) {}

  @ApiOperation({
    summary: 'Get skill by name',
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
  public async getSkillById(@Param('name') name: string): Promise<Skill> {
    throw new NotImplementedException();
  }

  @ApiOperation({
    summary: 'Add a new Skill',
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
  public async addSkill(
    @Body() id: number,
    name: string,
    level: number,
  ): Promise<Skill> {
    throw new NotImplementedException();
  }

  @ApiOperation({
    summary: 'Delete skill by ID',
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
  public async deleteSkillById(@Param('id') id: number): Promise<Skill> {
    throw new NotImplementedException();
  }
}

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
import { Skill, User } from '@prisma/client';

import { SkillService } from './skill.service';
import { UserDto } from '../user/dto/user.dto';
import { SkillDto } from './dto/skill.dto';

@ApiBasicAuth()
@ApiTags('Skill')
@Controller('skill')
export class SkillController {
  constructor(private skillService: SkillService) {}

  @ApiOperation({
    summary: 'Get skill by id',
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
  public async getSkillById(@Param('id') id: number): Promise<Skill> {
    return this.skillService.skill({ id: Number(id) });
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
    @Body()
    skillData: SkillDto,
  ): Promise<Skill> {
    return this.skillService.createSkill(skillData);
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
  @Delete('/:id')
  public async deleteSkillById(@Param('id') id: number): Promise<Skill> {
    const findUSkill = this.skillService.skill({ id: Number(id) });
    if (findUSkill != null) {
      return this.skillService.deleteSkill({ id: Number(id) });
    } else {
      throw new HttpException('User not exist', HttpStatus.BAD_REQUEST);
    }
  }
}

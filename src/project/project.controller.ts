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
import { Friend, Posts, Project, User } from '@prisma/client';
import { ProjectService } from './project.service';

@ApiTags('Project')
@Controller('project')
export class ProjectController {
  constructor(private projectService: ProjectService) {}

  @ApiOperation({
    summary: 'Get all projects',
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
  public async getAllProjects(): Promise<Project[]> {
    throw new NotImplementedException();
  }
  @ApiOperation({
    summary: 'Add a new Project',
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
  public async addProject(
    @Body() projectData: { name: string; link: string },
  ): Promise<Project> {
    throw new NotImplementedException();
  }

  @ApiOperation({
    summary: 'Delete project by ID',
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
  public async deleteProjectById(@Param('id') id: number): Promise<Project> {
    throw new NotImplementedException();
  }
}

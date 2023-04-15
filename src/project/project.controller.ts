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
  Render,
} from '@nestjs/common';

import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Friend, Posts, Project, User } from '@prisma/client';
import { ProjectService } from './project.service';

import { ProjectDto } from './dto/project.dto';

@ApiTags('Project')
@Controller('')
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
  @Get('/meet')
  @Render('meet')
  public async getAllProjects(): Promise<{ projects: Project[] }> {
    const projects = await this.projectService.projects({});
    return { projects };
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
  @Post('project/add')
  public async addProject(@Body() projectData: ProjectDto): Promise<Project> {
    const { name, link, friendId } = projectData;
    return this.projectService.createProject({
      name,
      link,
      friend: {
        connect: { id: friendId },
      },
    });
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
  @Delete('project/:id')
  public async deleteProjectById(@Param('id') id: number): Promise<Project> {
    const findProject = this.projectService.project({ id: Number(id) });
    if (findProject != null) {
      return this.projectService.deleteProject({ id: Number(id) });
    } else {
      throw new HttpException('Project not exist', HttpStatus.BAD_REQUEST);
    }
  }
}

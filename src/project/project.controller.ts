import {
  Controller,
  Get,
  Delete,
  NotImplementedException,
  Post,
  Query,
} from '@nestjs/common';

import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Project } from '@prisma/client';
import { ProjectService } from './project.service';

@ApiTags('Project')
@Controller('project')
export class ProjectController {
  constructor(private projectService: ProjectService) {}

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
  public async getAllFriends(): Promise<Project[]> {
    throw new NotImplementedException();
  }
}

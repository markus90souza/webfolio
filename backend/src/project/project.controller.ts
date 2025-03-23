import { Controller, Get, Param } from '@nestjs/common';
import { ProjectService } from './project.service';
import type { Project } from '@core';

@Controller('projects')
export class ProjectController {
  constructor(private readonly projectService: ProjectService) {}
  @Get()
  async findAll(): Promise<Project[]> {
    return this.projectService.findAll() as any;
  }

  @Get(':id')
  async findById(@Param('id') id: number): Promise<Project | null> {
    return this.projectService.findById(Number(id)) as any;
  }
}

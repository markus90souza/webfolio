import { Controller, Get } from '@nestjs/common';
import { TechnologyService } from './technology.service';
import { Technology } from '@core';

@Controller('technologies')
export class TechnologyController {
  constructor(private readonly technologyService: TechnologyService) {}
  @Get()
  async findAll(): Promise<Technology[]> {
    return this.technologyService.findAll();
  }

  @Get('/highlight')
  async findAllHighlight(): Promise<Technology[]> {
    return this.technologyService.findAllHighlight();
  }
}

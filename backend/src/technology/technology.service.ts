import { Injectable } from '@nestjs/common';
import { Technology } from '@core';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class TechnologyService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(): Promise<Technology[]> {
    return this.prisma.technology.findMany();
  }

  async findAllHighlight(): Promise<Technology[]> {
    return this.prisma.technology.findMany({
      where: {
        highlight: true,
      },
    });
  }
}

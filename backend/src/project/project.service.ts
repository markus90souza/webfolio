import { Project } from '@prisma/client';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class ProjectService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(): Promise<Project[]> {
    return this.prisma.project.findMany();
  }

  async findById(id: number): Promise<Project> {
    return this.prisma.project.findUnique({
      where: {
        id,
      },

      include: {
        Technologies: true,
      },
    });
  }
}

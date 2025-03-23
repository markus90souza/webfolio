import { Module } from '@nestjs/common';
import { ProjectService } from './project.service';
import { ProjectController } from './project.controller';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  providers: [ProjectService],
  controllers: [ProjectController],
  imports: [DatabaseModule],
})
export class ProjectModule {}

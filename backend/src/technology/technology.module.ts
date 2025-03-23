import { Module } from '@nestjs/common';
import { TechnologyController } from './technology.controller';
import { TechnologyService } from './technology.service';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  controllers: [TechnologyController],
  providers: [TechnologyService],
  imports: [DatabaseModule],
})
export class TechnologyModule {}

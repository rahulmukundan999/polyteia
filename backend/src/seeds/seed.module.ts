import { Module } from '@nestjs/common';
import { CommandModule } from 'nestjs-command';

import { SeedCommand } from './seed.command';
import { SeedService } from './seed.service';
import { StatisticsService } from '../statistics/statistics.service';
import { StatisticsModule } from '../statistics/statistics.module';
import { MongooseModule } from '@nestjs/mongoose';
import {
  StatisticsModel,
  StatisticsSchema,
} from '../statistics/models/statistics.model';

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGO_URL),
    MongooseModule.forFeature([
      { name: StatisticsModel.name, schema: StatisticsSchema },
    ]),
    CommandModule,
    StatisticsModule,
  ],
  providers: [SeedService, SeedCommand, StatisticsService],
  exports: [SeedCommand],
})
export class SeedsModule {}

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { StatisticsController } from './statistics.controller';
import { StatisticsService } from './statistics.service';
import { StatisticsModel, StatisticsSchema } from './models/statistics.model';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: StatisticsModel.name, schema: StatisticsSchema },
    ]),
  ],
  controllers: [StatisticsController],
  providers: [StatisticsService],
})
export class StatisticsModule {}

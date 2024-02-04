import { Controller, Get, Post, Body, Query } from '@nestjs/common';
import { StatisticsService } from './statistics.service';
import { QueryStatisticsDto } from './dto/query-statistics';
import { InsertStatisticsDto } from './dto/insert-statistics';

@Controller('statistics')
export class StatisticsController {
  constructor(private readonly statisticsService: StatisticsService) {}

  @Get('numeric-data')
  getNumericDataFromDatabase(@Query() param: QueryStatisticsDto) {
    return this.statisticsService.getNumericDataFromDatabase(param);
  }

  @Get('/random-data')
  getRandomData() {
    return this.statisticsService.getRandomData();
  }

  @Post()
  insertData(@Body() body: InsertStatisticsDto) {
    return this.statisticsService.insertManyData(body.data);
  }
}

import { Controller, Get, Post, Body } from '@nestjs/common';
import { StatisticsService } from './statistics.service';
import { InsertStatisticsDto } from './dto/insert-statistics';

@Controller('statistics')
export class StatisticsController {
  constructor(private readonly statisticsService: StatisticsService) {}

  @Get('numeric-data')
  getNumericDataFromDatabase() {
    return this.statisticsService.getNumericDataFromDatabase();
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

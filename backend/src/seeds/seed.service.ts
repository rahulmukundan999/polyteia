import { Inject, Injectable } from '@nestjs/common';
import { StatisticsService } from '../statistics/statistics.service';
import * as dayjs from 'dayjs';

@Injectable()
export class SeedService {
  @Inject()
  private readonly statisticsService: StatisticsService;

  constructor() {}

  async seedData() {
    const dataToSeed = Array.from({ length: 20 }, (_, index) => ({
      timestamp: dayjs().add(index, 'day').toDate(),
      value: Math.floor(Math.random() * 101), // Generates random value between 0 and 100
    }));

    try {
      const data = await this.statisticsService.getDataCount();
      if (data) {
        return null;
      }
      await this.statisticsService.insertManyData(dataToSeed);
      console.log('Seed data inserted successfully.');
    } catch (error) {
      console.error('Error seeding data:', error);
    }
  }
}

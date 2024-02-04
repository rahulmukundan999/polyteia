// src/seeds/seed.service.ts

import { Inject, Injectable } from '@nestjs/common';
import { StatisticsService } from '../statistics/statistics.service';

@Injectable()
export class SeedService {
  @Inject()
  private readonly statisticsService: StatisticsService;
  constructor() {}

  async seedData() {
    const dataToSeed = [
      {
        timestamp: new Date('2024-02-01'),
        value: 30,
      },
      {
        timestamp: new Date('2024-02-02'),
        value: 45,
      },
      {
        timestamp: new Date('2024-02-03'),
        value: 22,
      },
      {
        timestamp: new Date('2024-02-04'),
        value: 65,
      },
      {
        timestamp: new Date('2024-02-05'),
        value: 50,
      },
      {
        timestamp: new Date('2024-02-06'),
        value: 38,
      },
      {
        timestamp: new Date('2024-02-07'),
        value: 75,
      },
      {
        timestamp: new Date('2024-02-08'),
        value: 28,
      },
      {
        timestamp: new Date('2024-02-09'),
        value: 60,
      },
      {
        timestamp: new Date('2024-02-10'),
        value: 42,
      },
      {
        timestamp: new Date('2024-02-11'),
        value: 55,
      },
      {
        timestamp: new Date('2024-02-12'),
        value: 33,
      },
      {
        timestamp: new Date('2024-02-13'),
        value: 48,
      },
      {
        timestamp: new Date('2024-02-14'),
        value: 68,
      },
      {
        timestamp: new Date('2024-02-15'),
        value: 25,
      },
      {
        timestamp: new Date('2024-02-16'),
        value: 58,
      },
      {
        timestamp: new Date('2024-02-17'),
        value: 40,
      },
      {
        timestamp: new Date('2024-02-18'),
        value: 52,
      },
      {
        timestamp: new Date('2024-02-19'),
        value: 70,
      },
      {
        timestamp: new Date('2024-02-20'),
        value: 35,
      },
    ];

    try {
      const data = await this.statisticsService.getNumericDataFromDatabase();
      if (data && data.length > 0) {
        return null;
      }
      await this.statisticsService.insertManyData(dataToSeed);
      console.log('Seed data inserted successfully.');
    } catch (error) {
      console.error('Error seeding data:', error);
    }
  }
}

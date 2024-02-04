import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { StatisticsModel, StatisticsDocument } from './models/statistics.model';
import * as dayjs from 'dayjs';

@Injectable()
export class StatisticsService {
  constructor(
    @InjectModel(StatisticsModel.name)
    private readonly statisticsModel: Model<StatisticsDocument>,
  ) {}

  async getNumericDataFromDatabase(param): Promise<StatisticsModel[]> {
    try {
      const dateFrom = dayjs(param.dateFrom).toDate();
      const dateTo = dayjs(param.dateTo).toDate();
      return this.statisticsModel
        .find({
          timestamp: {
            $gte: dateFrom,
            $lte: dateTo,
          },
        })
        .exec();
    } catch (error) {
      throw error;
    }
  }

  async getRandomData(): Promise<StatisticsModel[]> {
    const randomData = Array.from({ length: 10 }, (_, index) => ({
      timestamp: new Date(),
      value: Math.floor(Math.random() * 100),
    }));

    return randomData;
  }

  async insertManyData(data: StatisticsModel[]): Promise<StatisticsModel[]> {
    this.validateDataArray(data);

    const insertedData = await this.insertDataIntoDatabase(data);
    return insertedData;
  }

  private validateDataArray(data: StatisticsModel[]): void {
    data.forEach((item) => {
      const newItem = new this.statisticsModel(item);
      const validationError = newItem.validateSync();
      if (validationError) {
        throw new BadRequestException(validationError.message);
      }
    });
  }

  private async insertDataIntoDatabase(
    data: StatisticsModel[],
  ): Promise<StatisticsModel[]> {
    try {
      const insertedData = await this.statisticsModel.insertMany(data);
      return insertedData;
    } catch (error) {
      throw error;
    }
  }

  async getDataCount(): Promise<number> {
    const count = await this.statisticsModel.countDocuments();
    return count;
  }
}

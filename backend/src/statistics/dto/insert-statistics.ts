import { IsArray, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { StatisticsModel } from '../models/statistics.model';

export class InsertStatisticsDto {
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => StatisticsModel)
  data: StatisticsModel[];
}

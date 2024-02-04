import { IsNotEmpty, IsDate } from 'class-validator';
import { Transform } from 'class-transformer';

export class QueryStatisticsDto {
  @IsNotEmpty()
  @IsDate()
  @Transform(({ value }) => new Date(value))
  dateFrom: Date;

  @IsNotEmpty()
  @IsDate()
  @Transform(({ value }) => new Date(value))
  dateTo: Date;
}

import { IsDate, IsNotEmpty } from 'class-validator';

export class QueryStatisticsDto {
  @IsNotEmpty()
  @IsDate()
  dateFrom: Date;

  @IsNotEmpty()
  @IsDate()
  dateTo: Date;
}

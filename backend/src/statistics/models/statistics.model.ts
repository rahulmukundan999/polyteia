import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type StatisticsDocument = StatisticsModel & Document;

@Schema()
export class StatisticsModel {
  @Prop({ required: true })
  timestamp: Date;

  @Prop({ required: true })
  value: number;
}

export const StatisticsSchema = SchemaFactory.createForClass(StatisticsModel);

// src/app.module.ts
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StatisticsModule } from './statistics/statistics.module';
@Module({
  imports: [MongooseModule.forRoot(process.env.MONGO_URL), StatisticsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

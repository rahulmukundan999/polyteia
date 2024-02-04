// src/commands/seed.command.ts

import { Command } from 'nestjs-command';
import { Injectable } from '@nestjs/common';
import { SeedService } from '../seeds/seed.service';
@Injectable()
export class SeedCommand {
  constructor(private readonly seedService: SeedService) {}

  @Command({
    command: 'seed',
    describe: 'Seed data into the database',
  })
  async run() {
    await this.seedService.seedData();
  }
}

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { CrawlerModule } from './crawler/crawler.module';

@Module({
    imports: [DatabaseModule, CrawlerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

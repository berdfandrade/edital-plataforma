// crawler.controller.ts
import { Controller, Get, Query } from '@nestjs/common';
import { CrawlerService } from './crawler.service';

@Controller('crawl')
export class CrawlerController {
  constructor(private readonly crawlerService: CrawlerService) {}

  @Get()
  async run(@Query('url') url: string) {
    return this.crawlerService.crawl(url);
  }
}

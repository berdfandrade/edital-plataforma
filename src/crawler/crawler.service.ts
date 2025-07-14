import { Injectable } from '@nestjs/common';
import axios from 'axios';
import * as cheerio from 'cheerio';

@Injectable()
export class CrawlerService {
  async crawl(url: string) {
    try {
      const { data } = await axios.get(url);
      const $ = cheerio.load(data);

      const title = $('title').text();
      const headings = $('h1, h2, h3')
        .map((_, el) => $(el).text())
        .get();

      return { title, headings };
    } catch (error) {
      console.error('Erro ao fazer scraping:', error.message);
      throw error;
    }
  }
}

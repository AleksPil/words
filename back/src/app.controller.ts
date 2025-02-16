import {Controller, Get, Post} from '@nestjs/common';
import { AppService } from './app.service';
import { Translate } from "@google-cloud/translate/build/src/v2";


@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    const translate = new Translate();
    const text = 'The text to translate, e.g. Hello, world!';
    const target = 'The target language, e.g. ru';

    async function translateText() {
      // Translates the text into the target language. "text" can be a string for
      // translating a single piece of text, or an array of strings for translating
      // multiple texts.
      let [translations] = await translate.translate(text, target) as any;
      translations = Array.isArray(translations) ? translations : [translations];
      console.log('Translations:');
      translations.forEach((translation, i) => {
        console.log(`${text[i]} => (${target}) ${translation}`);
      });
    }

    translateText();
    return this.appService.getHello();
  }

  @Post()
  translate() {
    const translate = new Translate();
    const text = 'The text to translate, e.g. Hello, world!';
    const target = 'The target language, e.g. ru';

    async function translateText() {
      // Translates the text into the target language. "text" can be a string for
      // translating a single piece of text, or an array of strings for translating
      // multiple texts.
      let [translations] = await translate.translate(text, target) as any;
      translations = Array.isArray(translations) ? translations : [translations];
      console.log('Translations:');
      translations.forEach((translation, i) => {
        console.log(`${text[i]} => (${target}) ${translation}`);
      });
    }

    translateText();
  }
}

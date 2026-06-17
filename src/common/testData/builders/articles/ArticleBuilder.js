import { faker } from '@faker-js/faker';
import { BaseBuilder } from '../BaseBuilder';

export class Article {
  constructor() {
    this.title = '';
    this.description = '';
    this.body = '';
    this.tagList = [];
  }
}

export class ArticleBuilder extends BaseBuilder {
  reset() {
    this.product = new Article();
  }

  setTitle(title) {
    this.product.title = title === undefined ? this.generateTitle() : title;
  }

  setDescription(desc) {
    this.product.description =
      desc === undefined ? this.generateDescription() : desc;
  }

  setBody(body) {
    this.product.body = body === undefined ? this.generateBody() : body;
  }

  setTagList(tagList, tagNumber = 1) {
    this.product.tagList =
      tagList === undefined ? this.generateTagList(tagNumber) : tagList;
  }

  generateTitle() {
    return faker.lorem.words(5);
  }

  generateDescription() {
    return faker.lorem.sentence(4);
  }

  generateBody() {
    return faker.lorem.sentences(2);
  }

  generateTagList(tagNumber) {
    return Array.from({ length: tagNumber }, () => faker.lorem.word());
  }
}

import { faker } from '@faker-js/faker';
import { BaseBuilder } from '../BaseBuilder';

export class Article {
  constructor() {
    this.title = null;
    this.description = null;
    this.body = null;
    this.tagList = [];
  }
}

export class ArticleBuilder extends BaseBuilder {
  reset() {
    this.product = new Article();
  }

  setTitle(title = this.generateTitle()) {
    this.product.title = title;
  }

  setDescription(description = this.generateDescription()) {
    this.product.description = description;
  }

  setBody(body = this.generateBody()) {
    this.product.body = body;
  }

  setTags(tagNumber = 0) {
    this.product.tagList = this.generateTags(tagNumber);
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

  generateTags(tagNumber = 0) {
    return Array.from({ length: tagNumber }, () => faker.lorem.word());
  }
}

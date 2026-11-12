import { faker } from '@faker-js/faker';
import { BaseBuilder } from '../BaseBuilder';

export class Article {
  constructor() {
    this.title = null;
    this.description = null;
    this.body = null;
    this.tagList = null;
  }
}

export class ArticleBuilder extends BaseBuilder {
  reset() {
    this.product = new Article();
  }

  setTitle(title) {
    this.product.title = title === undefined ? this.generateTitle() : title;
  }

  setDescription(description) {
    this.product.description =
      description === undefined ? this.generateDescription() : description;
  }

  setBody(body) {
    this.product.body = body === undefined ? this.generateBody() : body;
  }

  setTagList(tagList) {
    this.product.tagList =
      tagList === undefined ? this.generateTagList() : tagList;
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

  generateTagList(tagNumber = 0) {
    return Array.from({ length: tagNumber }, () => faker.lorem.word());
  }
}

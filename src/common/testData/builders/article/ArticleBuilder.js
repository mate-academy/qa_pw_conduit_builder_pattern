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

  setTitle(title) {
    this.product.title = title !== undefined ? title : this.generateTitle();
  }

  setDescription(description) {
    this.product.description =
      description !== undefined ? description : this.generateDescription();
  }

  setBody(body) {
    this.product.body = body !== undefined ? body : this.generateBody();
  }

  setTagList(tagList = null, tagNumber = 0) {
    this.product.tagList = tagList ?? this.generateTagList(tagNumber);
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

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

  setTitle(title = null) {
    this.product.title = title ?? this.generateTitle();
  }

  setDescription(description = null) {
    this.product.description = description ?? this.generateDescription();
  }

  setBody(body = null) {
    this.product.body = body ?? this.generateBody();
  }

  setTagList(tagList = null) {
    this.product.tagList = tagList ?? this.generateTagList();
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
    const tagList = Array.from({ length: tagNumber }, () => faker.lorem.word());

    return tagList;
  }
}

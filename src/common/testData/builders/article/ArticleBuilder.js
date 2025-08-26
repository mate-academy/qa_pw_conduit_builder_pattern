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
    if (title === undefined) {
      this.product.title = this.generateTitle();
    } else {
      this.product.title = title;
    }
  }

  setDescription(description) {
    if (description === undefined) {
      this.product.description = this.generateDescription();
    } else {
      this.product.description = description;
    }
  }

  setBody(body) {
    if (body === undefined) {
      this.product.body = this.generateBody();
    } else {
      this.product.body = body;
    }
  }

  setTagList(tags = 0) {
    if (Array.isArray(tags)) {
      this.product.tagList = tags;
    } else {
      this.product.tagList = this.generateTags(tags);
    }
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

  generateTags(tagNumber) {
    return Array.from({ length: tagNumber }, () => faker.lorem.word());
  }
}

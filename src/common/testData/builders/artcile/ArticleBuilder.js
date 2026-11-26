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

  setTitle(title = null) {
    this.product.title = title ?? faker.lorem.words(5);
  }

  setDescription(description = null) {
    this.product.description = description ?? faker.lorem.sentence(4);
  }

  setText(text = null) {
    this.product.body = text ?? faker.lorem.sentences(2);
  }

  setTags(tags = null) {
    this.product.tagList = tags ?? [];
  }

  generateTags(tagNumber = 0) {
    return Array.from({ length: tagNumber }, () => faker.lorem.word());
  }
}

import { faker } from '@faker-js/faker';
import { BaseBuilder } from '../BaseBuilder';

export class Article {
  constructor() {
    this.title = null;
    this.description = null;
    this.body = null;
    this.tags = null;
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

  setBody(text = null) {
    this.product.body = text ?? this.generateText();
  }

  setTags(tagNumber = 0, tags = null) {
    this.product.tags = tags ?? this.generateTags(tagNumber);;
  }

  generateTitle() {
    return faker.lorem.words(5);
  }

  generateDescription() {
    return faker.lorem.sentence(4);
  }

  generateText() {
    return faker.lorem.sentences(2);
  }

  generateTags(tagNumber) {
    return Array.from({ length: tagNumber }, () => faker.lorem.word())
  }
}
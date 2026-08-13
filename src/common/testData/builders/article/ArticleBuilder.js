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
    this.product.description = description === undefined
      ? this.generateDescription(): description;
  }

  setBody(body) {
    this.product.body = body === undefined ? this.generateBody(): body;
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

  generateTagList() {
    const tags = [];
    const tagCount = faker.number.int({ min: 1, max: 5 });

    for (let i = 0; i < tagCount; i++) {
      tags.push(faker.lorem.word());
    }

    return tags;
  };
}

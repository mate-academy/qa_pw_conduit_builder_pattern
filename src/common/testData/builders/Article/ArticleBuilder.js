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
    this.product.title = title ?? faker.lorem.words(5);
  }

  setDescription(description = null) {
    this.product.description = description ?? faker.lorem.sentence(4);
  }

  setBody(body = null) {
    this.product.body = body ?? faker.lorem.sentences(2);
  }

  setTagList(tagsCount = 0) {
    this.product.tagList = Array.from({ length: tagsCount }, () =>
      faker.lorem.word(),
    );
  }
}

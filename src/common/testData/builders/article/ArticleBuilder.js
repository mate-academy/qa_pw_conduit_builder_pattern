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

  setArticleTitle(title = null) {
    this.product.title = title ?? this.generateArticleTitle();
  }

  setArticleDescription(description = null) {
    this.product.description = description ?? this.generateArticleDescription();
  }

  setArticleBody(body = null) {
    this.product.body = body ?? this.generateArticleBody();
  }

  setArticleTag(tag = null) {
    this.product.tag = tag ?? this.generateArticleTag();
  }

  generateArticleTitle() {
    return faker.lorem.words(2);
  }

  generateArticleDescription() {
    return faker.lorem.words(5);
  }

  generateArticleBody() {
    return faker.lorem.words(15);
  }

  generateArticleTag() {
    return faker.lorem.words(1);
  }
}

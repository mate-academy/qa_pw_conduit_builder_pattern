import { faker } from "@faker-js/faker";
import { BaseBuilder } from "../BaseBuilder";

export class Article {
  constructor() {
    this.title = null;
    this.description = null;
    this.body = null;
    this.tags = [];
  }
}

export class ArticleBuilder extends BaseBuilder {
  reset() {
    this.article = new Article();
  }

  setTitle(title = null) {
    this.article.title = title ?? this.generateTitle();
  }

  setDescription(description = null) {
    this.article.description = description ?? this.generateDescription();
  }

  setBody(body = null) {
    this.article.body = body ?? this.generateBody();
  }

  setTag(tags = null) {
    this.article.tags = tags ?? this.generateTags(1);
  }

  generateTitle() {
    return faker.lorem.words(5);
  }

  generateDescription() {
    return faker.lorem.sentence();
  }

  generateBody() {
    return faker.lorem.words(7);
  }

  generateTags(count) {
    return Array.from({ length: count }, () => faker.word.noun());
  }
}

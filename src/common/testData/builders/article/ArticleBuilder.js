import { faker } from '@faker-js/faker';

export class ArticleBuilder {
  reset() {
    this.article = {};
  }

  setTitle(title = faker.lorem.words(3)) {
    this.article.title = title;
  }

  setDescription(description = faker.lorem.sentence()) {
    this.article.description = description;
  }

  setBody(body = faker.lorem.paragraph()) {
    this.article.body = body;
  }

  setTags(tags = [faker.lorem.word()]) {
    this.article.tagList = tags;
  }

  getProduct() {
    return { ...this.article };
  }
}

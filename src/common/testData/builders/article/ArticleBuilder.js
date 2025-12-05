import { faker } from '@faker-js/faker';

export class ArticleBuilder {
  constructor() {
    this.reset();
  }

  reset() {
    this._article = {
      title: '',
      description: '',
      body: '',
      tagList: []
    };
    return this;
  }

  setTitle(value = faker.lorem.words(5)) {
    this._article.title = value;
    return this;
  }

  setDescription(value = faker.lorem.sentence(4)) {
    this._article.description = value;
    return this;
  }

  setBody(value = faker.lorem.sentences(2)) {
    this._article.body = value;
    return this;
  }

  setTagList(tags = []) {
    this._article.tagList = Array.isArray(tags) ? tags : [];
    return this;
  }

  setTagListCount(count = 0) {
    const n = Math.max(0, Number(count) || 0);
    this._article.tagList = Array.from({ length: n }, () => faker.lorem.word());
    return this;
  }

  getProduct() {
    return { ...this._article };
  }
}

import { ArticleBuilder } from './ArticleBuilder';

export class ArticleDirector {
  constructor() {
    this.builder = new ArticleBuilder();
  }

  buildWithEmptyTags() {
    return this.builder
      .reset()
      .setTitle()
      .setDescription()
      .setBody()
      .setTagList([])          // ✔ matches new builder
      .getProduct();
  }

  buildWithOneTag() {
    return this.builder
      .reset()
      .setTitle()
      .setDescription()
      .setBody()
      .setTagListCount(1)      // ✔ matches new builder
      .getProduct();
  }

  buildWithTagsCount(count = 2) {
    return this.builder
      .reset()
      .setTitle()
      .setDescription()
      .setBody()
      .setTagListCount(count)  // ✔ matches new builder
      .getProduct();
  }

  buildMinimal() {
    return this.builder
      .reset()
      .setTitle()
      .setDescription()
      .setBody()
      .getProduct();
  }
}

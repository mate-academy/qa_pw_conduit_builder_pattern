import { ArticleBuilder } from './ArticleBuilder';

export class ArticleDirector {
  constructor() {
    this.builder = new ArticleBuilder();
  }

  buildArticle() {
    this.builder.reset();

    this.builder.setTitle();
    this.builder.setDescription();
    this.builder.setBody();
    this.builder.setTagList();

    return this.builder.getProduct();
  }

  buildWithEmptyBody() {
    this.builder.reset();

    this.builder.setTitle();
    this.builder.setDescription();
    this.builder.setBody(null);
    this.builder.setTagList();

    return this.builder.getProduct();
  }

  buildWithEmptyTitle() {
    this.builder.reset();

    this.builder.setTitle(null);
    this.builder.setDescription();
    this.builder.setBody();
    this.builder.setTagList();

    return this.builder.getProduct();
  }
  buildWithEmptyTags() {
    this.builder.reset();

    this.builder.setTitle();
    this.builder.setDescription();
    this.builder.setBody();
    this.builder.setTagList([]);

    return this.builder.getProduct();
  }

  buildWithOneTag() {
    this.builder.reset();

    this.builder.setTitle();
    this.builder.setDescription();
    this.builder.setBody();
    this.builder.setTagList(['testTag']);

    return this.builder.getProduct();
  }
}

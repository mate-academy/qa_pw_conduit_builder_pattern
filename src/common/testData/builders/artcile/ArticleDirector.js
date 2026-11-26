import { ArticleBuilder } from './ArticleBuilder';

export class ArticleDirector {
  constructor() {
    this.builder = new ArticleBuilder();
  }

  buildArticle(tagNumber = 0) {
    this.builder.reset();

    this.builder.setTitle();
    this.builder.setDescription();
    this.builder.setBody();
    this.builder.setTags(tagNumber);

    const article = this.builder.getProduct();

    return article;
  }

  buildWithEmptyBody() {
    this.builder.reset();

    this.builder.setTitle();
    this.builder.setDescription();
    this.builder.setBody(null);
    this.builder.setTags();

    const article = this.builder.getProduct();

    return article;
  }

  buildWithEmptyTitle() {
    this.builder.reset();

    this.builder.setTitle(null);
    this.builder.setDescription();
    this.builder.setBody();
    this.builder.setTags();

    const article = this.builder.getProduct();

    return article;
  }

  buildWithEmptyTags() {
    return this.buildArticle(0);
  }

  buildWithOneTag() {
    return this.buildArticle(1);
  }
}

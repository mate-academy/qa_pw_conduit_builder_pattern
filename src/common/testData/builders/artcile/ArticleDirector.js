import { ArticleBuilder } from "./ArticleBuilder";

export class ArticleDirector {
  constructor() {
    this.builder = new ArticleBuilder();
  }

  buildArticleWithNoTags() {
    this.builder.reset();

    this.builder.setTitle();
    this.builder.setDescription();
    this.builder.setBody();
    this.builder.setTags();

    const article = this.builder.getProduct();

    return article;
  }

  buildArticleWithOneTags() {
    this.builder.reset();

    this.builder.setTitle();
    this.builder.setDescription();
    this.builder.setBody();
    this.builder.setTags(1);

    const article = this.builder.getProduct();

    return article;
  }

  buildArticleWithEmptyBody() {
    this.builder.reset();

    this.builder.setTitle();
    this.builder.setDescription();
    this.builder.setBody('');
    this.builder.setTags();

    const article = this.builder.getProduct();

    return article;
  }

  buildArticleWithEmptyTitle() {
    this.builder.reset();

    this.builder.setTitle('');
    this.builder.setDescription();
    this.builder.setBody();
    this.builder.setTags();

    const article = this.builder.getProduct();

    return article;
  }
}
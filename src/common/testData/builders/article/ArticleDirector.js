import { ArticleBuilder } from './ArticleBuilder';

export class ArticleDirector {
  constructor() {
    this.builder = new ArticleBuilder();
  }

  buildArticle(tags) {
    this.builder.reset();

    this.builder.setTitle();
    this.builder.setDescription();
    this.builder.setBody();
    this.builder.setTagList(tags);

    const article = this.builder.getProduct();

    return article;
  }

  buildWithEmptyBody() {
    this.builder.reset();

    this.builder.setTitle();
    this.builder.setDescription();
    this.builder.setBody(null);
    this.builder.setTagList();

    const invalidArticle = this.builder.getProduct();

    return invalidArticle;
  }

  buildWithEmptyTitle() {
    this.builder.reset();

    this.builder.setTitle(null);
    this.builder.setDescription();
    this.builder.setBody();
    this.builder.setTagList();

    const invalidArticle = this.builder.getProduct();

    return invalidArticle;
  }

  buildWithEmptyTags() {
    this.builder.reset();

    this.builder.setTitle();
    this.builder.setDescription();
    this.builder.setBody();
    this.builder.setTagList(0);

    const article = this.builder.getProduct();

    return article;
  }

  buildWithOneTag() {
    this.builder.reset();

    this.builder.setTitle();
    this.builder.setDescription();
    this.builder.setBody();
    this.builder.setTagList(1);

    const article = this.builder.getProduct();

    return article;
  }
}

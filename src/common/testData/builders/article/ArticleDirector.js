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

    const article = this.builder.getProduct();

    return article;
  }

  buildArticleWithOneTag() {
    this.builder.reset();

    this.builder.setTitle();
    this.builder.setDescription();
    this.builder.setBody();
    this.builder.setTagList(null, 1);

    const article = this.builder.getProduct();

    return article;
  }

  buildWithEmptyTitle() {
    this.builder.reset();

    this.builder.setTitle(null);
    this.builder.setDescription();
    this.builder.setBody();
    this.builder.setTagList();

    const article = this.builder.getProduct();

    return article;
  }

  buildWithEmptyBody() {
    this.builder.reset();

    this.builder.setTitle();
    this.builder.setDescription();
    this.builder.setBody(null);
    this.builder.setTagList();

    const article = this.builder.getProduct();

    return article;
  }

  buildWithEmptyTags() {
    this.builder.reset();

    this.builder.setTitle();
    this.builder.setDescription();
    this.builder.setBody();
    this.builder.setTagList([]);

    const article = this.builder.getProduct();

    return article;
  }
}

import { ArticleBuilder } from './ArticleBuilder';

export class ArticleDirector {
  constructor() {
    this.builder = new ArticleBuilder();
  }

  buildArticleWithoutTags() {
    this.builder.reset();

    this.builder.setTitle();
    this.builder.setDescription();
    this.builder.setBody();
    this.builder.setTagList(0);

    const article = this.builder.getProduct();

    return article;
  }

  buildWithEmptyBody() {
    this.builder.reset();

    this.builder.setTitle();
    this.builder.setDescription();
    this.builder.setBody('');
    this.builder.setTagList();

    const article = this.builder.getProduct();

    return article;
  }

  buildWithEmptyTitle() {
    this.builder.reset();

    this.builder.setTitle('');
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
    this.builder.setTagList(1);

    const article = this.builder.getProduct();

    return article;
  }
}

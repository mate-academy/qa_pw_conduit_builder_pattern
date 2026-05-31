import { ArticleBuilder } from './ArticleBuilder';

export class ArticleDirector {
  constructor() {
    this.builder = new ArticleBuilder();
  }

  buildArticle() {
    this.builder.setTitle();
    this.builder.setDescription();
    this.builder.setBody();
    this.builder.setTags();

    const article = this.builder.getProduct();

    return article
  }

  buildWithEmptyTitle() {
    this.builder.setTitle('');
    this.builder.setDescription();
    this.builder.setBody();
    this.builder.setTags();

    const article = this.builder.getProduct();

    return article
  }

  buildWithEmptyDescription() {
    this.builder.setTitle();
    this.builder.setDescription('');
    this.builder.setBody();
    this.builder.setTags();

    const article = this.builder.getProduct();

    return article
  }

  buildWithEmptyBody() {
    this.builder.setTitle();
    this.builder.setDescription();
    this.builder.setBody('');
    this.builder.setTags();

    const article = this.builder.getProduct();

    return article
  }

  buildWithEmptyTags() {
    this.builder.setTitle();
    this.builder.setDescription();
    this.builder.setBody();
    this.builder.setTags(0, '');

    const article = this.builder.getProduct();

    return article
  }

  buildWithOneTag() {
    this.builder.setTitle();
    this.builder.setDescription();
    this.builder.setBody();
    this.builder.setTags(1);

    const article = this.builder.getProduct();

    return article
  }
}
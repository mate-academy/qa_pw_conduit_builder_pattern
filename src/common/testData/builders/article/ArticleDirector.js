import { ArticleBuilder } from './ArticleBuilder';

export class ArticleDirector {
  constructor() {
    this.builder = new ArticleBuilder();
  }

  buildValidArticle() {
    this.builder.reset();

    this.builder.setTitle();
    this.builder.setDescription();
    this.builder.setBody();
    this.builder.setTags();

    return this.builder.getProduct();
  }

  buildWithEmptyBody() {
    this.builder.reset();

    this.builder.setTitle();
    this.builder.setDescription();
    this.builder.setBody('');
    this.builder.setTags();

    return this.builder.getProduct();
  }

  buildWithEmptyTitle() {
    this.builder.reset();

    this.builder.setTitle('');
    this.builder.setDescription();
    this.builder.setBody();
    this.builder.setTags();

    return this.builder.getProduct();
  }

  buildWithEmptyTags() {
    this.builder.reset();

    this.builder.setTitle();
    this.builder.setDescription();
    this.builder.setBody();
    this.builder.setTags([]);

    return this.builder.getProduct();
  }

  buildWithOneTag() {
    this.builder.reset();

    this.builder.setTitle();
    this.builder.setDescription();
    this.builder.setBody();
    this.builder.setTags(['test']);

    return this.builder.getProduct();
  }
}

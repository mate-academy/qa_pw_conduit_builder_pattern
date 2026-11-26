import { ArticleBuilder } from './ArticleBuilder';

export class ArticleDirector {
  constructor() {
    this.builder = new ArticleBuilder();
  }

  buildArticle(tagNumber = 0) {
    this.builder.reset();
    this.builder.setTitle();
    this.builder.setDescription();
    this.builder.setText();
    this.builder.setTags(this.builder.generateTags(tagNumber));

    return this.builder.getProduct();
  }

  buildWithEmptyTags() {
    return this.buildArticle(0);
  }

  buildWithOneTag() {
    return this.buildArticle(1);
  }

  buildWithEmptyTitle() {
    this.builder.reset();
    this.builder.setTitle('');
    this.builder.setDescription();
    this.builder.setText();
    this.builder.setTags([]);

    return this.builder.getProduct();
  }

  buildWithEmptyBody() {
    this.builder.reset();
    this.builder.setTitle();
    this.builder.setDescription();
    this.builder.setText('');
    this.builder.setTags([]);

    return this.builder.getProduct();
  }
}

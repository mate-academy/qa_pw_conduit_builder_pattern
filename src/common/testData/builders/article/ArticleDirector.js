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
}

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
    this.builder.setTagList(this.builder.generateTagList(tagNumber));

    const article = this.builder.getProduct();

    return article;
  }

  buildArticleWithEmptyTitle() {
    this.builder.reset();

    this.builder.setTitle('');
    this.builder.setDescription();
    this.builder.setBody();
    this.builder.setTagList();

    const article = this.builder.getProduct();

    return article;
  }

  buildArticleWithEmptyBody() {
    this.builder.reset();

    this.builder.setTitle();
    this.builder.setDescription();
    this.builder.setBody('');
    this.builder.setTagList();

    const article = this.builder.getProduct();

    return article;
  }

  buildArticleWithEmptyTags() {
    this.builder.reset();

    this.builder.setTitle();
    this.builder.setDescription();
    this.builder.setBody();
    this.builder.setTagList([]);

    const article = this.builder.getProduct();

    return article;
  }
}

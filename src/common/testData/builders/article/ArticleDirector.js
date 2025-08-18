import { ArticleBuilder } from './ArticleBuilder';

export class ArticleDirector {
  constructor() {
    this.builder = new ArticleBuilder();
  }

  buildArticle() {
    this.builder.reset();

    this.builder.setArticleTitle();
    this.builder.setArticleDescription();
    this.builder.setArticleBody();
    this.builder.setArticleTag();

    const article = this.builder.getProduct();
    return article;
  }

  buildWithEmptyTitle() {
    this.builder.reset();

    this.builder.setArticleTitle('');
    this.builder.setArticleDescription();
    this.builder.setArticleBody();
    this.builder.setArticleTag();

    const newArticle = this.builder.getProduct();

    return newArticle;
  }

  buildWithEmptyBody() {
    this.builder.reset();

    this.builder.setArticleTitle();
    this.builder.setArticleDescription();
    this.builder.setArticleBody('');
    this.builder.setArticleTag();

    const newArticle = this.builder.getProduct();

    return newArticle;
  }

  buildWithEmptyTags() {
    this.builder.reset();

    this.builder.setArticleTitle();
    this.builder.setArticleDescription();
    this.builder.setArticleBody();
    this.builder.setArticleTag('');

    const newArticle = this.builder.getProduct();

    return newArticle;
  }
}

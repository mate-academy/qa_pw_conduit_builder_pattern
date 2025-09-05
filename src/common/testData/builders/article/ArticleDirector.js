import { ArticleBuilder } from './ArticleBuilder';

export class ArticleDirector {
  constructor () {
    this.builder = new ArticleBuilder();
  }

  buildFullArticleWithOneTag() {
    this.builder.reset();

    this.builder.setArticleTittle();
    this.builder.setArticleDescription();
    this.builder.setArticleBody();
    this.builder.setArticleTags(1);

    const article = this.builder.getProduct();

    return article;
  }

  buildArticleWithoutTag() {
    this.builder.reset();

    this.builder.setArticleTittle();
    this.builder.setArticleDescription();
    this.builder.setArticleBody();
    this.builder.setArticleTags();

    const article = this.builder.getProduct();

    return article;
  }


  buildArticleWithEmptyBody() {
    this.builder.reset();

    this.builder.setArticleTittle();
    this.builder.setArticleDescription();
    this.builder.setArticleTags(1);

    const article = this.builder.getProduct();

    return article;
  }

  buildArticleWithEmptyTitle() {
    this.builder.reset();

    this.builder.setArticleBody();
    this.builder.setArticleDescription();
    this.builder.setArticleTags(1);

    const article = this.builder.getProduct();

    return article;
  }

}

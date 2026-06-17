import { ArticleBuilder } from './ArticleBuilder';

export class ArticleDirector {
  constructor() {
    this.builder = new ArticleBuilder();
  }

  buildWithEmptyTitle() {
    this.builder.reset();

    this.builder.setTitle(null);
    this.builder.setDescription();
    this.builder.setBody();
    this.builder.setTagList();

    const newArticle = this.builder.getProduct();

    return newArticle;
  }

  buildWithEmptyTags() {
    this.builder.reset();

    this.builder.setTitle();
    this.builder.setDescription();
    this.builder.setBody();
    this.builder.setTagList([]);

    const newArticle = this.builder.getProduct();

    console.log(newArticle);

    return newArticle;
  }

  buildWithEmptyBody() {
    this.builder.reset();

    this.builder.setTitle();
    this.builder.setDescription();
    this.builder.setBody(null);
    this.builder.setTagList();

    const newArticle = this.builder.getProduct();

    console.log(newArticle);

    return newArticle;
  }

  buildWithOneTag() {
    this.builder.reset();

    this.builder.setTitle();
    this.builder.setDescription();
    this.builder.setBody();
    this.builder.setTagList();

    const newArticle = this.builder.getProduct();

    console.log(newArticle);

    return newArticle;
  }
}

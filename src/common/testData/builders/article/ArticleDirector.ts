import { Article, ArticleBuilder } from "./ArticleBuilder";

export class ArticleDirector {
  builder = new ArticleBuilder();

  buildArticleWithoutTags(): Article {
    this.builder.reset();

    this.builder.setTitle();
    this.builder.setDescription();
    this.builder.setBody();
    
    return this.builder.getProduct();
  }

  buildArticleWithTags(tagsNumber: number): Article {
    this.builder.reset();

    this.builder.setTitle();
    this.builder.setDescription();
    this.builder.setBody();
    this.builder.setTagList(tagsNumber);
    
    return this.builder.getProduct();
  }

  buildArticleWithEmptyTitle(): Article {
    this.builder.reset();

    this.builder.setTitle('');
    this.builder.setDescription();
    this.builder.setBody();
    this.builder.setTagList();

    return this.builder.getProduct();
  }

  buildArticleWithEmptyBody(): Article {
    this.builder.setTitle();
    this.builder.setDescription();
    this.builder.setBody('');
    this.builder.setTagList();

    return this.builder.getProduct()
  }
}
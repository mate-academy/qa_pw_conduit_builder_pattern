import { ArticleBuilder } from './ArticleBuilder';

export class ArticleDirector {
  constructor() {
    this.builder = new ArticleBuilder();
    
  }

  buildWithEmptyBody(title, description) {
    this.builder.title = title;
    this.builder.description = description;
    this.builder.setBody('');

    const newArticle = this.builder.getProduct();

    return newArticle;
  
  }

  buildWithEmptyTitle(title, description) {
    this.builder.title = '';
    this.builder.description = description;
    this.builder.setTitle('');

    const newArticle = this.builder.getProduct();

    return newArticle;
  }
    

  buildWithEmptyTags(title, description) {
    this.builder.title = title;
    this.builder.description = description;
    this.builder.setTagList([]);

    const newArticle = this.builder.getProduct();

    return newArticle;
  }

  buildWithOneTag(title = 'Default Title', description = 'Default Description', tag = 'tag') {
    this.builder.title = title;
    this.builder.description = description;
    this.builder.setTagList([tag]);

    const newArticle = this.builder.getProduct();

    return newArticle;
  }

  buildWithUnauthorizedUser(title, description) {
    this.builder.title = title;
    this.builder.description = description;
    this.builder.setUnauthorizedUser();

    const newArticle = this.builder.getProduct();

    return newArticle;
  }



}
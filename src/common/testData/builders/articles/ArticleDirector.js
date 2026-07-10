import { ArticleBuilder } from './ArticleBuilder';

export class ArticleDirector {
  constructor() {
    this.builder = new ArticleBuilder();
    
  }


  buildWithEmptyBody(title, description) {
    this.builder.reset();

    this.builder.setTitle(title);
    this.builder.setDescription(description);
    this.builder.setBody('');

    const newArticle = this.builder.getProduct();

    return newArticle;
  }

  buildWithEmptyDescription(title, description, body) {
    this.builder.reset();

    this.builder.setTitle(title);
    this.builder.setDescription(description);
    this.builder.setBody(body);

    const newArticle = this.builder.getProduct();

    return newArticle;
  
  }

  buildWithEmptyTitle( description) {
    this.builder.reset();

    this.builder.setTitle('');
    this.builder.setDescription(description);

    const newArticle = this.builder.getProduct();

    return newArticle;
  }
    

  buildWithEmptyTags(title, description, body) {
    this.builder.reset();

    this.builder.setTitle(title);
    this.builder.setDescription(description);
    this.builder.setBody(body);

    this.builder.setTagList([]);

    const newArticle = this.builder.getProduct();

    return newArticle;
  }

  buildWithOneTag(title = 'Default Title', description = 'Default Description', body = 'Default Body', tag = 'tag') {
    this.builder.reset();

    this.builder.setTitle(title);
    this.builder.setDescription(description);
    this.builder.setTagList([tag]);
    this.builder.setBody(body);


    const newArticle = this.builder.getProduct();

    return newArticle;
  }

  buildWithUnauthorizedUser(title, description) {
    this.builder.reset();

    this.builder.setTitle(title);
    this.builder.setDescription(description);
    this.builder.setUnauthorizedUser();

    const newArticle = this.builder.getProduct();

    return newArticle;
  }



}
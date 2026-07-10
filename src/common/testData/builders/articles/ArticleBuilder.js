import { BaseBuilder } from '../BaseBuilder';

export class Article {
    constructor() {
        this.title = null;
        this.description = null;
        this.body = null;
        this.tagList = [];
    }
}
export class ArticleBuilder extends BaseBuilder {
    constructor() {
        super();
        this.body = '';
        this.title = '';
        this.description = '';
        this.tagList = [];
    }

setTitle(title) {

    this.title = title === '' ? null : title;
    return this;
}
setDescription(description) {

    this.description = description === '' ? null : description;
    return this;
}

setBody(body){

    this.body = body === '' ? null : body;
    return this;
}

setTagList(tagList) {

    this.tagList = tagList;
    return this;
  }

setUnauthorizedUser(){
    this.setTitle(null);
    this.setDescription(null);
    this.setBody(null);
    this.setTagList([]);
    return this;
}

  getProduct(){
    return{
        title: this.title,
        description: this.description,
        body: this.body,
        tagList: this.tagList
    };
  }
}
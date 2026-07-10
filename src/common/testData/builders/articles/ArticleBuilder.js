export class ArticleBuilder {
    constructor() {
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

  getProduct(){
    return{
        title: this.title,
        description: this.description,
        body: this.body,
        tagList: this.tagList
    };
  }
}
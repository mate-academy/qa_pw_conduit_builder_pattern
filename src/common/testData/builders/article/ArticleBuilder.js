import { faker } from '@faker-js/faker';
import { BaseBuilder } from '../BaseBuilder';

class Article {
  constructor () {
    this.title = null;
    this.description = null;
    this.body = null;
    this.tagList = null;
  }

}

export class  ArticleBuilder extends BaseBuilder {
  reset() {
    this.product = new Article();
  }

  setArticleTittle(title = null) {
    this.product.title = title ?? this.generateTitle();
  }
  setArticleDescription(description = null) {
    this.product.description = description ?? this.generateDescription();
  }
  setArticleBody(body = null) {
    this.product.body = body ?? this.generateBody();
  }
  setArticleTags(tags = 0) {
    this.product.tagList = this.generateTags(tags);
  }

  generateTitle() {
    return this.title = faker.lorem.words(5);
  }
  generateDescription() {
    return this.description = faker.lorem.sentence(4);
  }
  generateBody() {
    return this.body = faker.lorem.sentences(2);
  }
  generateTags(tagNumber = 0) {
    return this.tagList =  Array.from(
      { length: tagNumber }, () => faker.lorem.word()
    );

  }


}

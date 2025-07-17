import { faker } from "@faker-js/faker";
import { BaseBuilder } from "../BaseBuilder";

export class Article {
  title = null;
  description = null;
  body = null;
  tagList = [];
}

export class ArticleBuilder extends BaseBuilder {
  reset(): void {
    this.product = new Article();
  }

  setTitle(title = null): void {
    this.product.title = title ?? this.generateRandomTitle();
  }

  setDescription(description = null): void {
    this.product.description = description ?? this.generateRandomDescription();
  }

  setBody(body = null) {
    this.product.body = body ?? this.generateRandomBody();
  }

  setTagList(tagsNumber = 1): void {
    this.product.tagList = this.generateRandomTagList(tagsNumber);
  }

  private generateRandomTitle(): string {
    return faker.lorem.words(5);
  }

  private generateRandomDescription(): string {
    return faker.lorem.sentence(4);
  }

  private generateRandomBody(): string {
    return faker.lorem.sentences(2);
  }

  private generateRandomTagList(tagNumber = 1): string[] {
    return Array.from({ length: tagNumber }, () => faker.lorem.word());
  }
}


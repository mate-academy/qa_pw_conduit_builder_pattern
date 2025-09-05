import { test as base } from '@playwright/test';
import { ArticlesApi } from '../../src/api/endpoints/ArticlesApi';
import { TestDataDirector } from '../../src/common/testData/builders/TestDataDirector';


export const test = base.extend<{
  articlesApi;
  articleWithoutTags;
  articleWithOneTag;
  articleDataDirector;
}>({
  articleDataDirector: async ({}, use) => {
    const director = new TestDataDirector().article;

    await use(director);
  },
  articlesApi: async ({ request }, use) => {
    const client = new ArticlesApi(request);

    await use(client);
  },
  articleWithoutTags: async ({ articleDataDirector }, use) => {
    const article = articleDataDirector.buildArticleWithoutTag();
    await use(article);
  },
  articleWithOneTag: async ({articleDataDirector}, use) => {
    const article = articleDataDirector.buildFullArticleWithOneTag();

    await use(article);
  },

  articleWithoutBody: async ({articleDataDirector}, use) => {
    const article = articleDataDirector.buildArticleWithEmptyBody();

    await use(article);
  },
  articleWithoutTitle: async ({articleDataDirector}, use) => {
    const article = articleDataDirector.buildArticleWithEmptyTitle();

    await use(article);
  },
});

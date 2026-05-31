import { test as base } from '@playwright/test';
import { ArticlesApi } from '../../src/api/endpoints/ArticlesApi';
import { TestDataDirector } from '../../src/common/testData/builders/TestDataDirector';

export const test = base.extend<{
  testDataDirector;
  articlesApi;
  articleWithoutTags;
  articleWithOneTag;
}>({
  testDataDirector: async ({}, use) => {
    const director = new TestDataDirector();

    await use(director);
  },
  articlesApi: async ({ request }, use) => {
    const client = new ArticlesApi(request);

    await use(client);
  },
  articleWithoutTags: async ({testDataDirector}, use) => {
    const article = testDataDirector.article.buildWithEmptyTags();

    await use(article);
  },
  articleWithOneTag: async ({testDataDirector}, use) => {
    const article = testDataDirector.article.buildWithOneTag();

    await use(article);
  },
});

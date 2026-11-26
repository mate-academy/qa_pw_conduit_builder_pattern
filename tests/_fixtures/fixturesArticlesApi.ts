import { test as base } from '@playwright/test';
import { ArticlesApi } from '../../src/api/endpoints/ArticlesApi';

export const test = base.extend<{
  articlesApi;
  articleWithoutTags;
  articleWithOneTag;
}>({
  articlesApi: async ({ request }, use) => {
    const client = new ArticlesApi(request);

    await use(client);
  },
  articleWithoutTags: async ({ testDataDirector }, use) => {
    await use(testDataDirector.article.buildArticle());
  },
  articleWithOneTag: async ({ testDataDirector }, use) => {
    await use(testDataDirector.article.buildWithOneTag());
  },
});

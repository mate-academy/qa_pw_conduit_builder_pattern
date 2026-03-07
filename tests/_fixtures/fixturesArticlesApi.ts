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
    const article = testDataDirector.article.buildArticle(0);
    await use(article);
  },
  articleWithOneTag: async ({ testDataDirector }, use) => {
    const article = testDataDirector.article.buildArticle(1);
    await use(article);
  },
});

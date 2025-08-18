import { test as base } from '@playwright/test';
import { ArticlesApi } from '../../src/api/endpoints/ArticlesApi';
import { ArticleDirector } from '../../src/common/testData/builders/article/ArticleDirector';

export const test = base.extend<{
  articlesApi: ArticlesApi;
  articleWithoutTags: any;
  articleWithOneTag: any;
  articleDirector: ArticleDirector;
}>({
  articlesApi: async ({ request }, use) => {
    const client = new ArticlesApi(request);

    await use(client);
  },

  articleDirector: async ({}, use) => {
    const director = new ArticleDirector();
    await use(director);
  },

  articleWithoutTags: async ({ articleDirector }, use) => {
    const article = articleDirector.buildWithEmptyTags();

    await use(article);
  },
  articleWithOneTag: async ({ articleDirector }, use) => {
    const article = articleDirector.buildArticle();
    article.tagList = ['playwright'];

    await use(article);
  },
});

import { ArticlesApi } from '../../src/api/endpoints/ArticlesApi';
import { TestDataDirector } from '../../src/common/testData/builders/TestDataDirector';
import { test as base } from './fixturesTestDataGenerators';

type ArticlesFixtures = {
  articlesApi: ArticlesApi;
  articleWithoutTags: ReturnType<TestDataDirector['article']['buildArticle']>;
  articleWithOneTag: ReturnType<TestDataDirector['article']['buildWithOneTag']>;
};

export const test = base.extend<ArticlesFixtures>({
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

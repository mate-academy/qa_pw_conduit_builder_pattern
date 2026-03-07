import { test } from '../../_fixtures/fixtures';

test(`Create article with unauthorized user`, async ({
  articlesApi,
  testDataDirector,
}) => {
  const article = testDataDirector.article.buildArticle(0);
  const response = await articlesApi.createArticle(article, '');

  await articlesApi.assertUnauthorizedResponseCode(response);
});

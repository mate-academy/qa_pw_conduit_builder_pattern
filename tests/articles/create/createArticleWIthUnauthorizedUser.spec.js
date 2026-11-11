import { test } from '../../_fixtures/fixtures';

test(`Create article with unautorized user`, async ({
  articlesApi,
  testDataDirector,
}) => {
  const article = testDataDirector.article.buildWithoutTags();
  const token = '';
  const response = await articlesApi.createArticle(article, token);

  await articlesApi.assertUnauthorizedResponseCode(response);
});

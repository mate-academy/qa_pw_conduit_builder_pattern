import { test } from '../../_fixtures/fixtures';

test(`Create article with unautorized user`, async ({
  articlesApi,
  testDataDirector,
}) => {
  const token = '';
  const article = testDataDirector.article.buildArticleWithoutTags();
  const response = await articlesApi.createArticle(article, token);

  await articlesApi.assertUnauthorizedResponseCode(response);
});

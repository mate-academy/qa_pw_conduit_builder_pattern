import { test } from '../../_fixtures/fixtures';

test(`Create article with unautorized user`, async ({
  articlesApi,
  testDataDirector,
}) => {
  const articleWithoutTags = testDataDirector.article.buildArticle();
  const token = '';
  const response = await articlesApi.createArticle(articleWithoutTags, token);

  await articlesApi.assertUnauthorizedResponseCode(response);
});

import { test } from '../../_fixtures/fixtures';

test(`Create article with unautorized user`, async ({
  articlesApi,
  testDataDirector,
}) => {
  const token = testDataDirector.user.buildUnauthorizedUserToken();
  const response = await articlesApi.createArticle(testDataDirector.article.buildWithEmptyTags('title', 'description'), token);

  await articlesApi.assertUnauthorizedResponseCode(response);
});

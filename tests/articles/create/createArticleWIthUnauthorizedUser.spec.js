import { test } from '../../_fixtures/fixtures';

test(`Create article with unautorized user`, async ({
  articlesApi,
  articleWithoutTags,
  testDataDirector,
}) => {
  const token = testDataDirector.user.buildUnauthorizedUserToken();
  const response = await articlesApi.createArticle(articleWithoutTags, token);

  await articlesApi.assertUnauthorizedResponseCode(response);
});

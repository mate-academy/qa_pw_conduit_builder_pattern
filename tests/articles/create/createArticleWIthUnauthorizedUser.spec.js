import { test } from '../../_fixtures/fixtures';

test(`Create article with unautorized user`, async ({
  articlesApi,
  testDataDirector,
}) => {
  const token = testDataDirector.user.buildUnauthorizedUserToken();
  const response = await articlesApi.createArticle(testDataDirector.article.buildWithEmptyTags(
    'Real Title Here', 'Real Description Here', 'Real Body Here'
  ), token);

  await articlesApi.assertUnauthorizedResponseCode(response);
});

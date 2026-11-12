import { test } from '../../_fixtures/fixtures';

test(`Create article with empty body`, async ({
  registeredUser,
  articlesApi,
  testDataDirector,
}) => {
  const article = testDataDirector.article.buildWithEmptyBody();

  const response = await articlesApi.createArticle(
    article,
    registeredUser.token,
  );

  await articlesApi.assertUnprocessableEntityResponseCode(response);
});

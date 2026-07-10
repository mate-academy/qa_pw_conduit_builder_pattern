import { test } from '../../_fixtures/fixtures';

test(`Create article with empty body`, async ({
  registeredUser,
  articlesApi,
  testDataDirector,
}) => {
  const article = testDataDirector.article.buildWithEmptyBody('title', 'description');
  const response = await articlesApi.createArticle(
    article,
    registeredUser.token,
  );
  console.log('Response:', response.status(), response.body());

  await articlesApi.assertUnprocessableEntityResponseCode(response);
});

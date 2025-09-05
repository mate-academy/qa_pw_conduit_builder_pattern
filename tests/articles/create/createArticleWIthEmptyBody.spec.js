import { test } from '../../_fixtures/fixtures';

test(`Create article with empty body`, async ({
  registeredUser,
  articlesApi,
  articleWithoutBody
}) => {
  const article = await articleWithoutBody

  const response = await articlesApi.createArticle(
    article,
    registeredUser.token,
  );

  await articlesApi.assertUnprocessableEntityResponseCode(response);
});

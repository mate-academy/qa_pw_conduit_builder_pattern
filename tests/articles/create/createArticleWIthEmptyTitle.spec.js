import { test } from '../../_fixtures/fixtures';

test(`Create article with empty title`, async ({
  registeredUser,
  articlesApi,
  articleWithoutTitle,
}) => {
  const article = await articleWithoutTitle;

  const response = await articlesApi.createArticle(
    article,
    registeredUser.token,
  );

  await articlesApi.assertInternalServerErrorResponseCode(response);
});

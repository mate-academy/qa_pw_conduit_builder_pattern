import { test } from '../../_fixtures/fixtures';

test(`Create article with empty title`, async ({
  registeredUser,
  articlesApi,
  testDataDirector,
}) => {
  const article = testDataDirector.article.buildArticleWithEmptyTitle();

  console.log('article', article);
  const response = await articlesApi.createArticle(
    article,
    registeredUser.token,
  );

  await articlesApi.assertInternalServerErrorResponseCode(response);
});

import { test } from '../../_fixtures/fixtures';

test(`Create article with empty tags`, async ({
  registeredUser,
  articlesApi,
  testDataDirector,
}) => {

  const article = testDataDirector.article.buildWithEmptyTags();
  const response = await articlesApi.createArticle(
    article,
    registeredUser.token,
  );

  await articlesApi.assertSuccessResponseCode(response);
  await articlesApi.assertResponseBodyContainsSlug(response);
  await articlesApi.assertArticleTitleHasCorrectValue(response, article.title);
  await articlesApi.assertArticleDescriptionHasCorrectValue(
    response,
    article.description,
  );
  await articlesApi.assertArticleBodyHasCorrectValue(response, article.body);
  await articlesApi.assertArticleTagsHasCorrectValue(response, article.tagList);
});

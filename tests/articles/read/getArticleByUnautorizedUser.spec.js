import { test } from '../../_fixtures/fixtures';

let slug;

test.beforeEach(async ({ registeredUser, articlesApi, testDataDirector }) => {
  const response = await articlesApi.createArticle(
    testDataDirector.article.buildWithOneTag(),
    registeredUser.token,
  );

  await articlesApi.assertSuccessResponseCode(response);

  slug = await articlesApi.parseSlugFromResponse(response);
});

test(`Get an article by unauthorized user`, async ({
  articlesApi,
  testDataDirector,
}) => {
  const article = testDataDirector.article.buildWithOneTag();
  const response = await articlesApi.getArticleBySlug(slug, '');

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

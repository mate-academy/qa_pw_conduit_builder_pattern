import { test } from '../../_fixtures/fixtures';

let slug;
let createdArticle;

test.beforeEach(async ({ registeredUser, articlesApi, testDataDirector }) => {
  createdArticle = testDataDirector.article.buildArticle(1);
  const response = await articlesApi.createArticle(
    createdArticle,
    registeredUser.token,
  );

  await articlesApi.assertSuccessResponseCode(response);

  slug = await articlesApi.parseSlugFromResponse(response);
});

test(`Get an article by unauthorized user`, async ({ articlesApi }) => {
  const response = await articlesApi.getArticleBySlug(slug, '');

  await articlesApi.assertSuccessResponseCode(response);
  await articlesApi.assertResponseBodyContainsSlug(response);
  await articlesApi.assertArticleTitleHasCorrectValue(
    response,
    createdArticle.title,
  );
  await articlesApi.assertArticleDescriptionHasCorrectValue(
    response,
    createdArticle.description,
  );
  await articlesApi.assertArticleBodyHasCorrectValue(
    response,
    createdArticle.body,
  );
  await articlesApi.assertArticleTagsHasCorrectValue(
    response,
    createdArticle.tagList,
  );
});

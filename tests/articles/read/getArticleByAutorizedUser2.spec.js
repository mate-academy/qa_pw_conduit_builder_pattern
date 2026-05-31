import { test } from '../../_fixtures/fixtures';

test.use({ usersNumber: 2 });

let slug;

test.beforeEach(async ({ registeredUsers, articlesApi, testDataDirector }) => {
  const response = await articlesApi.createArticle(
    testDataDirector.article.buildWithOneTag(),
    registeredUsers[0].token,
  );

  await articlesApi.assertSuccessResponseCode(response);

  slug = await articlesApi.parseSlugFromResponse(response);
});

test(`Get an article created by user1 by authorized user 2`, async ({
  articlesApi,
  testDataDirector,
  registeredUsers,
}) => {
  const article = testDataDirector.article.buildWithOneTag();
  const response = await articlesApi.getArticleBySlug(
    slug,
    registeredUsers[1].token,
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

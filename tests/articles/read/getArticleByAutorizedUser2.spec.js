import { test } from '../../_fixtures/fixtures';

test.use({ usersNumber: 2 });

let slug;
let createdArticle;

test.beforeEach(async ({ registeredUsers, articlesApi, testDataDirector }) => {
  createdArticle = testDataDirector.article.buildWithOneTag();

  const response = await articlesApi.createArticle(
    createdArticle,
    registeredUsers[0].token,
  );

  await articlesApi.assertSuccessResponseCode(response);

  slug = await articlesApi.parseSlugFromResponse(response);
});

test(`Get an article created by user1 by authorized user 2`, async ({
  articlesApi,
  registeredUsers,
}) => {
  const response = await articlesApi.getArticleBySlug(
    slug,
    registeredUsers[1].token,
  );

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

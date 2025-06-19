import { test } from '../../_fixtures/fixtures';

test('Successful user registration', async ({ user, usersApi }) => {
  const response = await usersApi.registerNewUser(user);

  await usersApi.assertSuccessResponseCode(response);

  await usersApi.assertUsernameHasCorrectValue(response, user.username);
  await usersApi.assertEmailHasCorrectValue(response, user.email);
  await usersApi.assertResponseBodyContainsToken(response);
});

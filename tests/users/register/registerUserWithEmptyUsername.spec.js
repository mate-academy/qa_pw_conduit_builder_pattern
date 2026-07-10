import { test } from '../../_fixtures/fixtures';
import { EMPTY_USERNAME_MESSAGE } from '../../../src/constants/authErrorMessages';

test('Register user with empty username', async ({ testDataDirector, user, usersApi }) => {
  const userWithEmptyUsername = testDataDirector.user.buildWithEmptyUsername(user.email, user.password);
  const response = await usersApi.registerNewUser(userWithEmptyUsername);

  await usersApi.assertUnprocessableEntityResponseCode(response);
  await usersApi.assertErrorMessageInResponseBody(
    response,
    EMPTY_USERNAME_MESSAGE,
    'username',
  );
});

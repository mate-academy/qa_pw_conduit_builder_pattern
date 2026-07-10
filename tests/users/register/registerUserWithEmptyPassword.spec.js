import { test } from '../../_fixtures/fixtures';
import { EMPTY_PASSWORD_MESSAGE } from '../../../src/constants/authErrorMessages';

test('Register user with empty password', async ({ usersApi, testDataDirector, user }) => {
  const userWithEmptyPassword = testDataDirector.user.buildWithEmptyPassword(user.username, user.email);
  const response = await usersApi.registerNewUser(userWithEmptyPassword);


  await usersApi.assertUnprocessableEntityResponseCode(response);
  await usersApi.assertErrorMessageInResponseBody(
    response,
    EMPTY_PASSWORD_MESSAGE,
    'password',
  );
});

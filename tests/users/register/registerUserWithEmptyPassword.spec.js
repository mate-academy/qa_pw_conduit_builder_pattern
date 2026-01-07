import { test } from '../../_fixtures/fixtures';
import { EMPTY_PASSWORD_MESSAGE } from '../../../src/constants/authErrorMessages';

test('Register user with empty password', async ({
  usersApi,
  testDataDirector,
}) => {
  const userData = testDataDirector.user.buildWithEmptyPassword();

  const response = await usersApi.registerNewUser(userData);

  await usersApi.assertUnprocessableEntityResponseCode(response);
  await usersApi.assertErrorMessageInResponseBody(
    response,
    EMPTY_PASSWORD_MESSAGE,
    'password',
  );
});

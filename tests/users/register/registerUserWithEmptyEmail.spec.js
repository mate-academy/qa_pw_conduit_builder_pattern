import { test } from '../../_fixtures/fixtures';
import { INVALID_EMAIL_MESSAGE } from '../../../src/constants/authErrorMessages';

test('Register user with empty email', async ({ usersApi, user }) => {
  const response = await usersApi.registerNewUser({
    email: '',
    password: user.password,
    username: user.username,
  });

  await usersApi.assertUnprocessableEntityResponseCode(response);
  await usersApi.assertErrorMessageInResponseBody(
    response,
    INVALID_EMAIL_MESSAGE,
    'email',
  );
});

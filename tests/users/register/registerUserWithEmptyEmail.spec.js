import { test } from '../../_fixtures/fixtures';
import { INVALID_EMAIL_MESSAGE } from '../../../src/constants/authErrorMessages';

test('Register user with empty email', async ({
  usersApi,
  testDataDirector,
}) => {
  const invalidUser = testDataDirector.user.buildWithEmptyEmail();
  const response = await usersApi.registerNewUser(invalidUser);

  await usersApi.assertUnprocessableEntityResponseCode(response);
  await usersApi.assertErrorMessageInResponseBody(
    response,
    INVALID_EMAIL_MESSAGE,
    'email',
  );
});

import { test } from '../../_fixtures/fixtures';
import { EMPTY_PASSWORD_MESSAGE } from '../../../src/constants/authErrorMessages';
import {
  UserDirector
} from '../../../src/common/testData/builders/user/UserDirector';

test(
  'Register user with empty password',
  async ({ usersApi, testDataDirector }) => {
    const newUser = testDataDirector.user.buildWithEmptyPassword()
    const response = await usersApi.registerNewUser(newUser);

    await usersApi.assertUnprocessableEntityResponseCode(response);
    await usersApi.assertErrorMessageInResponseBody(
      response,
      EMPTY_PASSWORD_MESSAGE,
      'password',
    );
});

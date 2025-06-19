import { test as base } from '@playwright/test';
import { request as apiRequest } from '@playwright/test';
import { UsersApi } from '../../src/api/endpoints/UsersApi';

export const test = base.extend<{
  usersApi;
  registeredUser;
  registeredUsers;
  userRequests;
}>({
  usersApi: async ({ request }, use) => {
    const client = new UsersApi(request);

    await use(client);
  },
  registeredUser: async ({ usersApi, user }, use) => {
    const response = await usersApi.registerNewUser(user);

    await usersApi.assertSuccessResponseCode(response);

    user['token'] = await usersApi.parseTokenFromBody(response);

    await use(user);
  },
  registeredUsers: async ({ usersApi, users, usersNumber }, use) => {
    for (let i = 0; i < usersNumber; i++) {
      const response = await usersApi.registerNewUser(users[i]);

      await usersApi.assertSuccessResponseCode(response);

      users[i]['token'] = await usersApi.parseTokenFromBody(response);
    }
    await use(users);
  },
  userRequests: async ({ registeredUsers, usersNumber }, use) => {
    const userRequests = Array(usersNumber);

    for (let i = 0; i < usersNumber; i++) {
      userRequests[i] = await apiRequest.newContext({
        extraHTTPHeaders: {
          authorization: `Token ${registeredUsers[i].token}`,
          'content-type': 'application/json',
        },
      });
    }
    await use(userRequests);
  },
});

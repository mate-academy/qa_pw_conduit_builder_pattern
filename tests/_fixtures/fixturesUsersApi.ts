import { test as base } from '@playwright/test';
import { request as apiRequest } from '@playwright/test';
import { UsersApi } from '../../src/api/endpoints/UsersApi';
import { TestDataDirector } from '../../src/common/testData/TestDataDirector';

export const test = base.extend<{
  usersApi;
  user;
  users;
  registeredUser;
  registeredUsers;
  userRequests;
}>({
  usersApi: async ({ request }, use) => {
    const client = new UsersApi(request);

    await use(client);
  },
  user: async ({}, use) => {
    const director = new TestDataDirector();

    const user = director.buildUser();

    await use(user);
  },
  users: async ({ usersNumber }, use) => {
    const users = Array(usersNumber);
    const director = new TestDataDirector();

    for (let i = 0; i < usersNumber; i++) {
      users[i] = director.buildUser();
    }

    await use(users);
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

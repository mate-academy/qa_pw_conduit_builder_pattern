import { test as base } from '@playwright/test';
import { TestDataDirector } from '../../src/common/testData/builders/TestDataDirector';

type TestDataFixtures = {
  testDataDirector: TestDataDirector;
  user: ReturnType<TestDataDirector['user']['buildUser']>;
  users: Array<ReturnType<TestDataDirector['user']['buildUser']>>;
  usersNumber: number;
  newUserProfile: ReturnType<
    TestDataDirector['userProfile']['buildNewUserProfile']
  >;
};

export const test = base.extend<TestDataFixtures>({
  usersNumber: [1, { option: true }],
  testDataDirector: async ({}, use) => {
    const director = new TestDataDirector();

    await use(director);
  },
  user: async ({ testDataDirector }, use) => {
    const user = testDataDirector.user.buildUser();

    await use(user);
  },
  users: async ({ testDataDirector, usersNumber }, use) => {
    const users = Array(usersNumber);

    for (let i = 0; i < usersNumber; i++) {
      users[i] = testDataDirector.user.buildUser();
    }

    await use(users);
  },
  newUserProfile: async ({ testDataDirector }, use) => {
    const profile = testDataDirector.userProfile.buildNewUserProfile();

    await use(profile);
  },
});

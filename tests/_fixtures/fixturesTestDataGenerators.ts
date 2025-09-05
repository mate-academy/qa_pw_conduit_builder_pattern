import { test as base } from '@playwright/test';
import { TestDataDirector } from '../../src/common/testData/builders/TestDataDirector';

// Type definitions for fixtures
interface User {
  username: string;
  email: string;
  password: string;
}

interface Profile {
  username: string;
  bio?: string;
  image?: string;
  following?: boolean;
}

export const test = base.extend<{
  testDataDirector: TestDataDirector;
  user: User;
  users: User[];
  newUserProfile: Profile;
  usersNumber: number;
}>({
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
    const profile = testDataDirector.userProfile.buildNewProfile('token');

    await use(profile);
  },
  usersNumber: async ({}, use) => {
    await use(5); // Default number of users
  },
});

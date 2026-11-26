import { test as base } from './fixturesGeneric';
import { TestDataDirector } from '../../src/common/testData/builders/TestDataDirector';
import { UserDirector } from '../../src/common/testData/builders/user/UserDirector';

type User = ReturnType<UserDirector['buildUser']>;

export const test = base.extend<{
  testDataDirector: TestDataDirector;
  user: User;
  users: User[];
}>({
  testDataDirector: async ({}, use) => {
    const director = new TestDataDirector();

    await use(director);
  },
  user: async (
    { testDataDirector }: { testDataDirector: TestDataDirector },
    use: (user: User) => Promise<void>,
  ) => {
    const user = testDataDirector.user.buildUser();

    await use(user);
  },
  users: async ({ testDataDirector, usersNumber }, use) => {
    const users: User[] = Array(usersNumber);

    for (let i = 0; i < usersNumber; i++) {
      users[i] = testDataDirector.user.buildUser();
    }

    await use(users);
  },
});

# Practice with Builder design pattern

## Table of contents

- [Description](#description)
- [Preparation](#preparation)
- [Main Task](#main-task)
- [Task Reporting](#task-reporting)

## Description

In this task you will work with Builder desgin pattern for generation of the test data for Conduit API testing.


The full list of APIs is described in the [documentation](https://documenter.getpostman.com/view/22790481/2sB2j1iY5B). 

## Preparation

1. Open the forked repo in VSCode.
2. Create a new branch by running `git checkout -b task_solution`.
3. Run the installation commands:

    - `npm ci`
    - `npx playwright install`


## Main Task

Part1:

1. Create two new methods in the `UserDirector.js` class `buildWithEmptyPassword()` &  `buildWithEmptyUsername()`;
2. Update the user registration tests to use just created methods:
- `tests/users/register/registerUserWithEmptyPassword.spec.js`;
- `tests/users/register/registerUserWithEmptyUsername.spec.js`;
3. Pay attention to call the methods with the help of `testDataDirector` fixture. 
4. Use test `tests/users/register/registerUserWithEmptyEmail.spec.js` as an example.
5. Run all the tests and make sure they pass. Use npm scripts for executing tests against `stage` Conduit env. 

Part2:

5. Create `ArticleBuilder` and `ArticleDirector` classes in the new folder `./src/common/testData/builders/artcile`.
6. Initialize  `ArticleDirector` instance within the `TestDataDirector` class.
7. Update the articles tests to use builder & director for creating article objects.
- `tests/articles/create/createArticleWIthEmptyBody.spec.js`;
- `tests/articles/create/createArticleWIthEmptyTags.spec.js`;
- `tests/articles/create/createArticleWIthEmptyTitle.spec.js`;
- `tests/articles/create/createArticleWIthOneTag.spec.js`;
- `tests/articles/create/createArticleWIthUnauthorizedUser.spec.js`;
- `tests/articles/read/getArticleByAutorizedUser2.spec.js`;
- `tests/articles/read/getArticleByUnautorizedUser.spec.js`;
8. Remove method `src/common/testData/generateNewArticleData.js` from project.
9. Run all the tests and make sure they pass. Use npm scripts for executing tests against `stage` Conduit env. 


## Task Reporting

1. Add and commit all your updates.
2. Push the code to the origin.
3. Create a PR for your changes.
4. Keep implementing suggestions from code review until your PR is approved.

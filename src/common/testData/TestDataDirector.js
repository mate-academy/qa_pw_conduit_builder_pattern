import { UserBuilder } from './builders/UserBuilder';

export class TestDataDirector {
  constructor() {
    this.userBuilder = new UserBuilder();
  }

  buildUser() {
    this.userBuilder.reset();

    this.userBuilder.setUsername();
    this.userBuilder.setEmail();
    this.userBuilder.setPassword();

    const user = this.userBuilder.getProduct();

    return user;
  }
}

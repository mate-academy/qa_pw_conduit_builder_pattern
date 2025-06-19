import { faker } from '@faker-js/faker';

export class User {
  constructor() {
    this.username = null;
    this.email = null;
    this.password = null;
  }
}

export class UserBuilder {
  constructor() {
    this.reset();
  }

  reset() {
    this.user = new User();
  }

  setUsername(username = null) {
    this.user.username = username ?? this.generateUsername();
  }

  setEmail(email = null) {
    this.user.email = email ?? this.generateEmail();
  }

  setPassword(password = null) {
    this.user.password = password ?? this.generatePassword();
  }

  getProduct() {
    return this.user;
  }

  generateFirstName() {
    return faker.person.firstName();
  }

  generateLastName() {
    return faker.person.lastName();
  }

  generateUsername() {
    const username = `${this.generateFirstName()}_${this.generateLastName()}`
      .replaceAll(`'`)
      .toLowerCase();

    return username;
  }

  generateEmail() {
    const email = `${this.username}_${faker.internet.email()}`.toLowerCase();

    return email;
  }

  generatePassword() {
    return faker.internet.password();
  }
}

import { UserBuilder } from './UserBuilder';

export class UserDirector {
  constructor() {
    this.builder = new UserBuilder();
    this.username = '';
    this.email = '';
    this.password = '';
  }

  buildWithEmptyPassword(username, email) {
    this.builder.reset();
    this.username = username;
    this.email = email;
    this.builder.setUsername(username);
    this.builder.setEmail(email);
    this.builder.setPassword('');


    const newUser = this.builder.getProduct();

    return newUser;
  }

  buildWithEmptyUsername(){
    this.builder.reset();
    this.builder.setUsername('');
    this.builder.setEmail();
    this.builder.setPassword();

    const newUser = this.builder.getProduct();

    return newUser;

 };

  buildUser() {
    this.builder.reset();

    this.builder.setUsername();
    this.builder.setEmail();
    this.builder.setPassword();

    const user = this.builder.getProduct();

    return user;
  }

  buildWithEmptyEmail() {
    this.builder.reset();

    this.builder.setUsername();
    this.builder.setEmail('');
    this.builder.setPassword();

    const newUser = this.builder.getProduct();

    return newUser;
  }

   buildUnauthorizedUserToken() {

     return null;

  }


}
/* eslint-disable lines-between-class-members */
// export
class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  sayHi() {
    console.log(`Hi, I am ${this.name}`);
  }
  requestNewPhoto() {
    console.log(`New photo request was sent for ${this.name}`);
  }
  setAge(newAge) {
    if (newAge < 0) {
      return false;
    }
    if (newAge >= 25) {
      console.log(`New photo request was sent for ${this.name}`);
    }
    this.age = newAge;
    return this.age;
  }
  static createEmpty() {
    const newUser = new User('', null);
    return newUser;
  }
}

// ===check===
const user0 = new User('Bill', 92);
const user1 = new User('Ann', 32);
const user2 = new User('Bob', 15);
const user3 = new User('Kate', 25);

console.log('0. User.createEmpty ', User.createEmpty(user0));
console.log('-----------------------------');
console.log('1. +user1 ', user1.sayHi());
console.log('2. +user1 ', user1.requestNewPhoto());
console.log('-----------------------------');
console.log('1. +user2.age ', user2.age);
console.log('2. +user2 ', user2.setAge(18));
console.log('3. +user2.age ', user2.age);
console.log('4. +user2 ', user2.setAge(25));
console.log('5. +user2.age ', user2.age);
console.log('-----------------------------');
console.log('1. +user3 ', user3.sayHi());
console.log('2. +user3 ', user3.setAge(30));
console.log('2. +user3 ', user3.setAge(-30));

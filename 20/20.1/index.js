// task: create and export by name constructor for users with the help of classes

// 1. create class User
// 2. create constructor(name, age) + save args
// 3. create sayHi.prototype with obj.name to console
// 4. -//- requestNewPhoto
// 5. -//- setAge that set new age -//- if age >=25
//  5.1 setAge return false if age < 0
// 6. -//- static createEmpty with name = '', age = null
// 7. export User

//export
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

  setAge(age) {
    if (age < 0) {
      return false;
    }
    if (age >= 25) {
      console.log(`New photo request was sent for ${this.name}`);
    }
    this.age = age;
    return age;
  }

  static createEmpty() {
    const newUser = new User('', null);
    console.log(`name: ${newUser.name}, age: ${newUser.age}`);
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

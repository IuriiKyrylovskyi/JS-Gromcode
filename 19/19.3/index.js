// export
function User(name = 'John', age) {
  this.name = name;
  this.age = age;
}

User.prototype.sayHi = function () {
  console.log(`Hi, I am ${this.name}`);
};

User.prototype.requestNewPhoto = function () {
  console.log(`New photo request was sent for ${this.name}`);
};

User.prototype.setAge = function (age) {
  if (age < 0) {
    return false;
  }
  if (age >= 25) {
    console.log(`New photo request was sent for ${this.name}`);
  }
  this.age = age;
  return age;
};

const user1 = new User('Ann', 32);
const user2 = new User('Bob', 15);
const user3 = new User(this.name, 25);

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

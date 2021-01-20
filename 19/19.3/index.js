// export
function User(name, age) {
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
  if (age >= 25) {
    console.log(`New photo request was sent for ${this.name}`);
    this.age = age;
  }
  if (age >= 0) {
    return age;
  }
  return false;
};

const user1 = new User('Ann', 32);
const user2 = new User('Bob', 25);
const user3 = new User('Tom', 15);
console.log('+user1 ', user1.sayHi());
console.log('-user1 ', user1.requestNewPhoto());
console.log('-----------------------------');
console.log('-user2 ', user2.setAge(15));
console.log('-----------------------------');
console.log('+user3 ', user3.sayHi());
console.log('+user3 ', user3.setAge(30));

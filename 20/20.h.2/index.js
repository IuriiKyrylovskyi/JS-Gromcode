// 1. create class User with its constructor(id, name, sessionId), all strings
// 2. create getter for args
// 3. create next class UserRepository, constructor(users=[])
// 4. create getter to prevent array mutation using Object.freeze(arr)
// 5. create methods: - getUserNames() to get [users]
//										- getUserIds() to get[users.ids]
//										- getUserNameById() to get [users.name by id]

// export
// eslint-disable-next-line max-classes-per-file
class User {
  constructor(id, name, sessionId) {
    this._id = Object.freeze(id);
    this._name = Object.freeze(name);
    this._sessionId = Object.freeze(sessionId);
  }

  // get userProp() {
  //   return `${this._id} ${this._name} ${this._sessionId}`;
  // }
  get id() {
    return this._id;
  }

  get name() {
    return this._name;
  }

  get sessionId() {
    return this._sessionId;
  }
}

// export
class UserRepository {
  constructor(users) {
    this._users = Object.freeze(users);
  }

  get users() {
    return this._users;
  }

  getUserNames() {
    return this._users.map(a => a._name);
  }

  getUserIds() {
    return this._users.map(a => a._id);
  }

  getUserNameById(id) {
    console.log(
      this._users
        .filter(a => a._id === id)
        .map(a => a._name)
        .toString(),
    );
    return this._users
      .filter(a => a._id === id)
      .map(a => a._name)
      .pop();
  }
}

// ===check===
const userClose = new User('10', 'Kolian', '100');
console.log(typeof userClose.name, userClose.name);
userClose.name = 'Mykola';
console.log(typeof userClose.name, userClose.name);
console.log(typeof userClose, userClose);

// // +++++++++++++++++++++++
console.log(`{this.id} {this.name} {this.sessionId}`);

const user1 = new User('1', 'Tom', '01');
const user2 = new User('2', 'Ann', '02');
const user3 = new User('3', 'Bill', '03');
const user4 = new User('4', 'Kate', '04');
const user5 = new User('5', 'Bob', '05');

const users = [user1, user2, user3, user4, user5];

const repo1 = new UserRepository(users);
console.log(repo1);
console.log('userProp: ', repo1.userProp);
console.log('UserRepositoryProp: ', repo1.UserRepositoryProp);
console.log('getUserNames: ', repo1.getUserNames());
console.log('getUserIds: ', repo1.getUserIds());
console.log('getUserNameById: ', repo1.getUserNameById('3'));

console.log('user1.name = ', user1._name); // Tom
user1.name = 'Tomas';
console.log('user1.name = ', user1._name); // Tom

console.log('repo1.users[1].name = ', repo1.users[1]._name); // Ann
repo1.users[1]._name = 'Jill';
console.log('repo1.users[1].name = ', repo1.users[1]._name); // Jill

const alien = new User('20', 'Alien', '2000');
[...users].push(alien);
console.log('users push ', users);
console.log(typeof repo1.users);
// repo1.push(alien);
console.log('repo1.users push ', users);
console.log(repo1);

// console.log('****************************');

// // -users frozen check-
// console.log('typeof repo1.users ', typeof repo1.users);
// console.log(Object.isFrozen(repo1.users));
// console.log(Object.isFrozen(repo1));
// console.log(Object.isFrozen(User));
// console.log(Object.isFrozen(User.name));

// console.log('repo1.users[0] - ', repo1.users[0]);
// delete repo1.users[0];
// console.log(repo1);

// // console.log('users: ', users);
// // console.log(
// //   'users.Name: ',
// //   users.map(a => a.name),
// // );
// // console.log(
// //   'users.id: ',
// //   users.map(a => a.id),
// // );
// // console.log(
// //   'users.sessionId: ',
// //   users.map(a => a.sessionId),
// // );
// // console.log(
// //   'users.getUserNameId: ',
// //   users.filter(a => a.id === '4').map(a => a.name),
// // );

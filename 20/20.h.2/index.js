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
    this.id = String(id);
    this.name = String(name);
    this.sessionId = String(sessionId);
    Object.freeze(this);
  }

  get userProp() {
    // return `${this.id} ${this.name} ${this.sessionId}`.split(' ');
    // writable: false;
    // this.id;
    // this.name;
    // this.sessionId;
    // return;
    return `${this.id} ${this.name}	${this.sessionId}`;
  }
}

// export
class UserRepository {
  constructor(users) {
    this.users = users;
    Object.freeze(this.users);
  }

  get freezeArray() {
    return this.users;
  }

  getUserNames() {
    return this.users.map(a => a.name);
  }

  getUserIds() {
    return this.users.map(a => a.id);
  }

  getUserNameById() {
    return this.users.filter(a => a.id).map(a => a.name);
  }
}

// ===check===
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
console.log('freezeArray: ', repo1.freezeArray);
console.log('getUserNames: ', repo1.getUserNames());
console.log('getUserIds: ', repo1.getUserIds());
console.log('getUserNameById: ', repo1.getUserNameById('3'));

console.log('user1.name = ', user1.name);
user1.name = 'Tomas';
console.log('user1.name = ', user1.name);

console.log('users: ', users);
console.log(
  'users.Name: ',
  users.map(a => a.name),
);
console.log(
  'users.id: ',
  users.map(a => a.id),
);
console.log(
  'users.sessionId: ',
  users.map(a => a.sessionId),
);
console.log(
  'users.getUserNameId: ',
  users.filter(a => a.id === '4').map(a => a.name),
);

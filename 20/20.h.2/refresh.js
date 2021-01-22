// export
class User {
  constructor(id, name, sessionId) {
    this.id = id;
    this.name = name;
    this.sessionId = sessionId;
    Object.freeze(User);
  }
  get userData() {
    return `${this.id} ${this.name} ${this.sessionId}`;
  }
}

// export
class UserRepository {
  constructor(users) {
    this.users = users;
    Object.freeze(this);
  }
  get UserRepositoryData() {
    return `${this.users}`;
  }
  getUserName() {
    this.users.map(user => user.name);
  }
  getUserIds() {
    this.users.map(user => user.id);
  }
  getUserNameById(id) {
    this.users
      .filter(user => user.id === id)
      .map(el => el.name)
      .pop();
  }
}

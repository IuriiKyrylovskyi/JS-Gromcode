// export
// eslint-disable-next-line max-classes-per-file
class User {
  constructor(id, name, sessionId) {
    this._id = Object.freeze(id);
    this._name = Object.freeze(name);
    this._sessionId = Object.freeze(sessionId);
  }

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

  get UserRepositoryData() {
    return this._users;
  }

  getUserName() {
    this._users.map(user => user._name);
  }

  getUserIds() {
    this.users.map(user => user._id);
  }

  getUserNameById(id) {
    this._users
      .filter(user => user._id === id)
      .map(el => el._name)
      .pop();
  }
}

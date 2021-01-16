export const event = {
  message: 'Welcome to the party!',
  guests: [
    { name: 'Bob', age: 15, email: 'bbb@mail' },
    { name: 'Ann', age: 25, email: 'aaa@mail' },
    { name: 'Kate', age: 18, email: 'kkk@mail' },
    { name: 'Tom', age: 32, email: 'ttt@mail' },
    { name: 'Dick', age: 29, email: 'ddd@mail' },
    { name: 'Tim', age: 18, email: 'iii@mail' },
    { name: 'Irvy', age: 20, email: 'yyy@mail' },
  ],
  getInvitations() {
    return this.guests
      .filter(({ age }) => age >= 18)
      .map(({ email, name }) => ({ email, message: `Dear ${name}! ${this.message}` }));
  },
};

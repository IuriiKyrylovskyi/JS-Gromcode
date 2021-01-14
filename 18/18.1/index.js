// export
const event = {
  message: 'Welcome to the party!',
  guests: [
    { name: 'John', age: 18, email: 'j@server.com' },
    { name: 'Bob', age: 22, email: 'b@server.com' },
    { name: 'Ann', age: 15, email: 'a@server.com' },
    { name: 'Tom', age: 16, email: 't@server.com' },
    { name: 'Kate', age: 21, email: 'k@server.com' },
  ],
  getInvitations() {
    return this.guests
      .filter(({ age }) => age >= 18)
      .map(({ email, name }) => ({ email, message: `Dear ${name}! ${this.message}` }));
  },
};

console.log(event.getInvitations());

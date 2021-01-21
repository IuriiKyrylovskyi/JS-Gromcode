const user = {
  firstName: 'John',
  lastName: 'Doe',
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  set fullName(value) {
    const [firstName, lastName] = value.split(' ');
    this.firstName = firstName;
    this.lastName = lastName;
  },
};

export { user as default };
	
// ====check====
console.log(user); // { firstName: 'John', lastName: 'Doe', fullName: [Getter/Setter] }
console.log(user.fullName); // John Doe
user.fullName = 'Brad Covach';
console.log(user.fullName); // Brad Covach
console.log(user.firstName); // Brad
console.log(user.lastName); // Covach

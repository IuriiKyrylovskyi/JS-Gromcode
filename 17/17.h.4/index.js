//export
const user = {
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  setFullName(str) {
    const partOfName = str.split(' ');
    this.firstName = partOfName[0];
    this.lastName = partOfName[1];
  },
};

const str = 'John Doe';
const johnDoe = user.setFullName.bind(str);
console.log(johnDoe());

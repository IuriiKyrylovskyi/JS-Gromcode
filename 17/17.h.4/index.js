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




// undone example
const str = 'John Doe';
const userName = function () {
  this.setFullName();
};

const johnDoe = userName.call(user);
console.log(johnDoe());

export const user = {
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  setFullName(fullName) {
    const partOfName = fullName.split(' ');
    this.firstName = partOfName[0];
    this.lastName = partOfName[1];
  },
};

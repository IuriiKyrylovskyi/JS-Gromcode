function compareObjects(obj1, obj2) {
  console.log(Object.keys(obj1));
  console.log(Object.keys(obj1)[0]);
  console.log(Object.keys(obj2));
  console.log(Object.keys(obj2)[0]);
  console.log(Object.values(obj1));
  console.log(Object.values(obj1)[0]);
  console.log(Object.values(obj2));
  console.log(Object.values(obj2)[0]);

  console.log('indexOf :', Object.keys(obj2).indexOf('age'));
  Object.keys(obj1).some((i, index) => console.log(i + '.......' + Object.keys(obj2)[index]));
  Object.values(obj1).some((i, index) => console.log(i + ' ....... ' + Object.values(obj2)[index]));

  if (Object.entries(obj1).length !== Object.entries(obj2).length) {
    return false;
  }
  if (
    Object.keys(obj1).some((i, index) => i !== Object.keys(obj2)[index]) ||
    Object.values(obj1).some((i, index) => i !== Object.values(obj2)[index])
  ) {
    return false;
  }
  return true;
}

// examples
const obj1 = {
  name: 'Tom',
  age: 17,
};

const obj2 = {
  name: 'Bob',
  age: 17,
};

const obj3 = {
  name: 'Bob',
  age: 17,
  student: false,
};

const obj4 = {
  name: 'Tom',
  age: 17,
};

console.log('compareObjects 1 false = ', compareObjects(obj1, obj2)); // ==> false
console.log('compareObjects 2 false = ', compareObjects(obj2, obj3)); // ==> false
console.log('compareObjects 3 true = ', compareObjects(obj1, obj4)); // ==> true

function compareObjects(obj1, obj2) {
  console.log(Object.keys(obj1));
  console.log(Object.keys(obj2));
  console.log(Object.values(obj1));
  console.log(Object.values(obj2));
  if (Object.entries(obj1).length !== Object.entries(obj2).length) {
    if (Object.keys(obj1) !== Object.keys(obj2) || Object.values(obj1) !== Object.values(obj2)) {
      return false;
    }
  }

  // if (Object.entries(obj1))
  return true;
  // return Object.entries(obj2).length;
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

console.log(compareObjects(obj1, obj2)); // ==> false
console.log(compareObjects(obj2, obj3)); // ==> false
console.log(compareObjects(obj1, obj4)); // ==> true

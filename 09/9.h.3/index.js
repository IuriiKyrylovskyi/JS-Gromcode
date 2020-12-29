/* eslint-disable prefer-object-spread */
const mergeObjectsV1 = (obj1, obj2) => Object.assign(obj1, obj2);

const mergeObjectsV2 = (obj1, obj2) => Object.assign(obj2, obj1);

const mergeObjectsV3 = (obj1, obj2) => {
  const mergedArr = { ...obj1, ...obj2 };
  return mergedArr;
};

const mergeObjectsV4 = (obj1, obj2) => {
  const mergedArr = { ...obj2, ...obj1 };
  return mergedArr;
};

// examples
const obj1 = {
  name: 'Tomik',
  age: 17,
};

const obj2 = {
  name: 'Bob',
  student: false,
};

console.log(mergeObjectsV1(obj1, obj2)); // ==> { name: 'Bob', age: 17, student: false }
console.log(mergeObjectsV2(obj1, obj2)); // ==> { name: 'Tom', age: 17, student: false }
console.log(mergeObjectsV3(obj1, obj2)); // ==> { name: 'Bob', age: 17, student: false }
console.log(mergeObjectsV4(obj1, obj2)); // ==> { name: 'Tom', age: 17, student: false }

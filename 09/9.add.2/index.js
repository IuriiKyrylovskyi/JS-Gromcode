const buildObject = (keysList, valuesList) => {
  const obj = {};
  for (let i = 0; i < keysList.length; i++) {
    obj[keysList[i]] = valuesList[i];
  }
  return obj;
};

const buildObjectReduce = (keysList, valuesList) =>
  keysList.reduce((obj, curVal, curInd) => ({ ...obj, [curVal]: valuesList[curInd] }), {});


const buildObjectReduce2 = (keysList, valuesList) =>
  valuesList.reduce((obj, curVal, curInd) => ({ ...obj, [keysList[curInd]]: curVal }), {});

  

// examples
const keys = ['name', 'address', 'age'];
const values = ['Bob', 'Ukraine', 34];
const result = buildObject(keys, values); // ==> { name: 'Bob', address: 'Ukraine', age: 56 }
console.log(result);
console.log(buildObjectReduce(keys, values));
console.log(buildObjectReduce2(keys, values));

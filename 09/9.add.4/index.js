const customers = {
  'customer-id-1': {
    name: 'William',
    age: 54,
  },
  'customer-id-2': {
    name: 'Tom',
    age: 17,
  },
  'customer-id-3': {
    name: 'Bob',
    age: 23,
  },
  'customer-id-4': {
    name: 'Ann',
    age: 19,
  },
};

const getCustomersList = obj => {
  const newObj = JSON.parse(JSON.stringify(obj));
  console.log('newObjstart', newObj);
  console.log('obj', obj);
  // console.log(Object.keys(obj)[1]);
  const keys = Object.keys(newObj);
  console.log(keys);
  const values = Object.values(newObj);
  // .map((a, i) => {
  //   a['id'] = Object.keys(obj)[i];
  // })
  // .sort((a, b) => a['age'] - b['age']);

  console.log('values ', values);

  values.map((a, i) => {
    a['id'] = keys[i];
    return a;
  });

  console.log('values.map ', values);
  // console.log(values[0].age);
  values.sort((a, b) => a['age'] - b['age']);
  console.log('values.sort ', values);

  // console.log('values.keys ', (values[0]['id'] = keys[0]));
  // console.log('values [0] ', values[0]);
  // console.log('keys.indexOf("customer-id-2") ', keys['customer-id-2'.indexOf()]);
  // console.log('----');
  // console.log('----');
  // console.log(values.reduce((object, el, i) => ({ ...object, [object['id']]: keys[i] }), 1));
  // console.log('----');
  // const indexOfEl = values.indexOf();
  // values[indexOfEl]['id'] = keys[indexOfEl];
  // return values;

  // console.log(
  //   'last:',
  //   Object.values(obj)
  //     .map((a, index) => (a.id = Object.keys(obj)[index]))
  //     .sort((a, b) => a['age'] - b['age']),
  // );
  // const arr = {};
  console.log('obj', obj);
  console.log('newObj', newObj);
  return values;
};

console.log(getCustomersList(customers));

const getCustomersListSecond = obj => {
  const newObj = JSON.parse(JSON.stringify(obj));
 
  const sortedByAge = Object.values(newObj)
    .map((a, i) => {
      a['id'] = Object.keys(newObj)[i];
      return a;
    })
    .sort((prev, next) => prev['age'] - next['age']);
  return sortedByAge;
};

console.log('=====2=====', getCustomersListSecond(customers));

const myArray = [
  { group: 'one', color: 'red' },
  { group: 'two', color: 'blue' },
  { group: 'one', color: 'green' },
  { group: 'one', color: 'black' },
];

const group_to_values = myArray.reduce((obj, item) => {
  obj[item.group] = obj[item.group] || [];
  obj[item.group].push(item.color);
  return obj;
}, {});

console.log(group_to_values);






const group = [
  { name: 'Ann', birthDate: '07/06/2002' },
  { name: 'Bob', birthDate: '11/17/1995' },
  { name: 'Bill', birthDate: '01/20/2000' },
  { name: 'Kate', birthDate: '03/11/1993' },
  { name: 'Kate', birthDate: '03/23/1990' },
  { name: 'Tom', birthDate: '01/15/1987' },
  { name: 'Cruze', birthDate: '03/05/1984' },
];

// console.log('result = ', studentsBirthDays(group));
console.log('init arr ', group);

const MAGICNUMBER = 5;
const filterNames = (arr, text) =>
  arr.filter(item => (item.length > MAGICNUMBER && item.includes(text) ? item : false));

const array = ['John', 'Olivya', 'Oleksandr', 'Emanuel', 'Vanya', 'Nastya'];
const txt = 'ya';
console.log(filterNames(array, txt));
console.log(array[2].length);

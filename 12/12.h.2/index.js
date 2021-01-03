/* global event */
/* eslint no-restricted-globals: ["error", "event"] */

const cleanTransactionsList = arr =>
  arr.filter(a => isFinite(a)).map(a => '$' + Number.parseFloat(a).toFixed(2));

console.log(cleanTransactionsList([' 1.9 ', 'one', '16.4', 17, ' 1 dollar ']));

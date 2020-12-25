'use strict';

const withdraw = (clients, balances, client, amount) => {
  const index = clients.indexOf(client);
  const balance = balances[index] - amount;
  if (balance < 0) {
    return -1;
  }
  return balance;
};

const withdraw2 = (clients, balances, client, amount) =>
  balances[clients.indexOf(client)] < amount ? -1 : balances[clients.indexOf(client)] - amount;

//example 1:

//input
console.log(withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'John', 50));
console.log('withdraw2', withdraw2(['Ann', 'John', 'User'], [1400, 87, -6], 'John', 50));

//output
//37
//и массив balances должен быть [1400, 37, -6]

//example 2:

//input
console.log(withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'User', 10));

//output
//-1
//и массив balances должен быть [1400, 87, -6]

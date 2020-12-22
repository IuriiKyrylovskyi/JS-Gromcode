function withdraw(clients, balances, client, amount) {
  let balance = 0;
  for (let clientArrEl = 0; clientArrEl < clients.length; clientArrEl += 1) {
    if (client === clients[clientArrEl]) {
      balance = balances[clientArrEl] - amount;
    }
    if (balance < 0) {
      return -1;
    }
  }
  return balance;
}
console.log('withdraw_1 ', withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'John', 50));
console.log('withdraw_2 ', withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'User', 10));

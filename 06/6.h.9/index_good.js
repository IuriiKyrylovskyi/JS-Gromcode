function withdraw(clients, balances, client, amount) {
  const index = clients.indexOf(client);
  if (amount > balances[index]) {
    return -1;
  }
  const balance = balances[index] - amount;
  return balance;
}
console.log('withdraw_1 ', withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'John', 50));

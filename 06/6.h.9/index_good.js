function withdraw(clients, balances, client, amount) {
  const index = clients.indexOf(client);
  if (amount > balances[index]) {
    return -1;
  }
  const balance = balances[index] - amount;
  return balance;
}
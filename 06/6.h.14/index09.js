const withdraw = (clients, balances, client, amount) => {
  const index = clients.indexOf(client);
  return balances[index] >= amount ? balances[index] - amount : -1;
};

const array = ['ann', 'fill', 'john', 'kate'];
const balanseArr = [1, 200, 3, 40, 5];
console.log(withdraw(array, balanseArr, 'fill', 50));
console.log(array);

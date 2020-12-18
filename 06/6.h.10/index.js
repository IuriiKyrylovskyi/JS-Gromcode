function withdraw(clients, balances, client, amount) {
  let amountOnBalabce = 0;
  let newAmountOnBalabce = 0;
  let commonNumber = 0;
  for (let clientArrEl = 0; clientArrEl < clients.length; clientArrEl += 1) {
    if (client === String(clients[clientArrEl])) {
      commonNumber = clientArrEl;
    }
  }
  console.log('commonNumber', commonNumber);

  for (let clientArrBal = 0; clientArrBal < clients.length; clientArrBal += 1) {
    amountOnBalabce = balances[commonNumber];
    newAmountOnBalabce = amountOnBalabce - amount;
    balances[commonNumber] = newAmountOnBalabce;
    
    // console.log(amountOnBalabce);
    console.log(balances);
    console.log('newAmountOnBalabce ', newAmountOnBalabce);
  
    if (newAmountOnBalabce < 0) {
      return -1;
    }
    return newAmountOnBalabce;
  }
}
console.log(withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'John', 50));
console.log('withdraw_2 ', withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'User', 10));

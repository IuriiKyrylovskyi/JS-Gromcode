function findDivCount(a, b, n) {
  let amount = 0;
  for (let i = a; i <= b; i++){
    if (i % n === 0) {
      // amount += 1;
      amount ++;
      // console.log(amount);
    }
  }
  return amount;
}


console.log(findDivCount(5,20,21));

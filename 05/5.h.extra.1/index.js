function truePrimes(n) {
  for (let i = 2; i < n; i += 1) { 
    if (n % i === 0) {
      // console.log('false i', i);
      return false;
    }
  }
  // console.log('prime is ', n);
  return true;
}
// truePrimes(15);
// console.log(truePrimes(4));

function getPrimes(n) {
  for (let i = 2; i < n; i += 1) {
    if (truePrimes(i)) {
      console.log(i);
    }
  }
}
getPrimes(12);


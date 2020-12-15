function getPrimes(n) {
  for (i = 2; i <= n; i++) {
    let isPrime = true;

    for (j = 2; j < i; j++) {
      if (i % j === 0 && i !== j) {
        isPrime = false;
        // continue;//wrong usage
      }
    }
    if (isPrime === true) {
      console.log(i);
    }
  }
}

function getPrimesMy(n) {
  if (Number.isInteger(n)) {
    for (i = 2; i <= n; i++) {
      for (j = 2; j <= n; j++) {
        if (i % j === 0 && i !== j) {
          console.log('NOTPrime i - ', i);
          break;
        }
        if (Math.sqrt(i) === j) {
          console.log('NOTPrime i - ', i);
          break;
        }
        console.log('getPrimesMy i - ', i);
        break;
      }
    }
  }
}

console.log('getPrimes - ', getPrimes(2));
console.log('getPrimesMy - ', getPrimesMy(20));

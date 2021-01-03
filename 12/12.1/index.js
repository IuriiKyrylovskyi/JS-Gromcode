const calc = str => {
  const [a, operator, b] = str.split(' ');
  let result;
  switch (operator) {
    case '+': {
      result = Number(a) + Number(b);
      break;
    }
    case '-': {
      result = a - b;
      break;
    }
    case '*': {
      result = a * b;
      break;
    }
    case '/': {
      result = a / b;
      break;
    }
    // no default
  }
  return `${str} = ${result}`
};

console.log(calc('5 + 4'));
console.log(calc('4 - 1.25'));
console.log(calc('8 - 9'));
console.log(calc('9 * 9'));
console.log(calc('9 / -3'));

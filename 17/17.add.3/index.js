export function calculator(a, b) {
  switch (this.operation) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '/':
      return a / b;
    case '*':
      return a * b;
    default:
      return NaN;
  }
}

/*
 * Ф-ция multiplier должна быть создана на основе calculator
 * с использования .bind
 * и должна принимать 2 числа и возвращать из произведение
 */
const mult = { operation: '*' };
export function multiplier(a, b) {
  return calculator.bind(mult, a, b)();
}
// console.log(multiplier()(2, 3));
console.log(multiplier(2, 3));

/*
 * Ф-ция summator должна быть создана на основе calculator
 * с использования .bind
 * и должна принимать 2 числа и возвращать из сумму
 */
export function summator(a, b) {
  const plus = { operation: '+' };
  return calculator.bind(plus, a, b)();
}
// console.log(summator()(2, 3));
console.log(summator(2, 3));

/*
 * Ф-ция twice должна быть создана на основе calculator
 * с использования .bind
 * и должна принимать 1 число и возвращать это число умноженное на 2
 */

export function twice(a) {
  const two = {
    operation: '*',
    num: 2,
  };
  return calculator.bind(two, a, two.num)();
}
console.log(twice(5));
// console.log(twice()(5));

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
const mul = {
  operation: '*',
};
const multipl = (a, b) => () => calculator.bind(mul, a, b);
export const multiplier = multipl();
/*
 * Ф-ция summator должна быть создана на основе calculator
 * с использования .bind
 * и должна принимать 2 числа и возвращать из сумму
 */

const sum = {
  operation: '+',
};
const summer = (a, b) => () => calculator.bind(sum, a, b);
export const summator = summer();
/*
 * Ф-ция twice должна быть создана на основе calculator
 * с использования .bind
 * и должна принимать 1 число и возвращать это число умноженное на 2
 */

const tw = a => () => calculator.bind(mul, a, 2);
export const twice = tw();

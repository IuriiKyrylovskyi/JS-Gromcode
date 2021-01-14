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
const calculationV1 = {
  version: 1,
  sum: function (a, b) {
    console.log(`Calculation version ${this.version}. The sum of           
                 ${a} and ${b} is ${a + b}`);
  },
};
const calculationV2 = {
  version: 2,
};
let sumV1 = calculationV1.sum(1, 2); // Calculation version 1. The sum of 1 and 2 is 3
let sumV2 = calculationV1.sum.apply(calculationV2, [4, 5]); // Calculation version 2. The sum of 4 and 5 is 9
//export
const multiplier = calculator.switch.bind();

/*
 * Ф-ция summator должна быть создана на основе calculator
 * с использования .bind
 * и должна принимать 2 числа и возвращать из сумму
 */

// put your code here

/*
 * Ф-ция twice должна быть создана на основе calculator
 * с использования .bind
 * и должна принимать 1 число и возвращать это число умноженное на 2
 */

// put your code here

export const getMinSquaredNumber = numbers =>
  !Array.isArray(numbers) || numbers.length === 0
    ? null
    : Math.min(...numbers.map(num => Math.abs(num))) ** 2;

// console.log(getMinSquaredNumber([-777, 3, -2, 6, 45, -20]));

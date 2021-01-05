import getSum, { getSquaredArray, getOddNumbers } from './calculator';

it('should double numbers in array', () => {
  const result = getSquaredArray([1, 3, 5]);

  expect(result).toEqual([1, 9, 25]);
});

it('should left odd numbers in array', () => {
  const result = getOddNumbers([1, 2, 3, 4, 5]);

  expect(result).toEqual([1, 3, 5]);
});

it('should sum up 2 numbers', () => {
  const result = getSum(1, 2);

  expect(result).toEqual(3);
});

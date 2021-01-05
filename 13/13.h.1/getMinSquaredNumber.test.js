import { getMinSquaredNumber } from './getMinSquaredNumber';

it('check if array is empty', () => {
  const result = getMinSquaredNumber([]);

  expect(result).toEqual(null);
});

it('check if array is not given', () => {
  const result = getMinSquaredNumber('hello');

  expect(result).toEqual(null);
});

it('should return min squared number', () => {
  const result = getMinSquaredNumber([-777, 3, -2, 6, 45, -20]);

  expect(result).toEqual(4);
});

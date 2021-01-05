import { reverseArray } from './reversedArray';

it('should return reversed array', () => {
  const result = reverseArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

  expect(result).toEqual([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]);
});

it('should return null', () => {
  const result = reverseArray(1, 2, 3, 4, 5);

  expect(result).toEqual(null);
});

it('should check if initial array is unmutable', () => {
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const result = reverseArray(array);

  expect(result).not.toEqual(array);
});


import { sumOfSquares, sumOfSquaresCall, sumOfSquaresSpred } from './refresh';

it('get sum of doubles apply', () => {
  const numbers = (1, 2, 3, 4, 5);
  const sum = sumOfSquares(numbers);
  
  expect(sum).toEqual(55);
});
it('get sum of doubles call', () => {
  const numbers = (1, 2, 3, 4, 5);
  const sum2 = sumOfSquaresCall(numbers);
  
  expect(sum2).toEqual(55);
});
it('get sum of doubles spred', () => {
  const numbers = (1, 2, 3, 4, 5);
  const sum3 = sumOfSquaresSpred(numbers);

  expect(sum3).toEqual(55);
});

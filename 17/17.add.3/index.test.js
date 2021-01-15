export { calculator, multiplier, summator, twice } from './index';

it('should multiply', () => {
  const result = multiplier(2, 3);

  expect(result).toEqual(6);
});

it('should sum', () => {
  const result = summator(2, 3);

  expect(result).toEqual(5);
});

it('should sum', () => {
  const result = twice(2, 5);

  expect(result).toEqual(10);
});

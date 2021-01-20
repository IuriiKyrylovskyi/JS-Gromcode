import { multiplier, summator, twice } from './refresh';

it('should multiply', () => {
  const result = multiplier(2, 3);
  const tw = twice(5);

  expect(result).toEqual(6);
  expect(tw).toEqual(10);
});

it('should summ', () => {
  const result = summator(2, 5);

  expect(result).toEqual(7);
});

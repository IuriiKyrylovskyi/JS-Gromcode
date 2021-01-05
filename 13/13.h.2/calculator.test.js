import { calc } from './calculator';

it('should sum up', () => {
  const result = calc('8 + 2');

  expect(result).toEqual('8 + 2 = 10');
});

it('should substruct', () => {
  const result = calc('8 - 2');

  expect(result).toEqual('8 - 2 = 6');
});

it('should multiply', () => {
  const result = calc('8 * 2');

  expect(result).toEqual('8 * 2 = 16');
});

it('should divide', () => {
  const result = calc('8 / 2');

  expect(result).toEqual('8 / 2 = 4');
});

it('should return null', () => {
  const result = calc(8 + 2);

  expect(result).toEqual(null);
});


it('should return null', () => {
  const result = calc([8 + 2]);

  expect(result).toEqual(null);
});
import { wallet } from './refresh';

it('find max and min', () => {
  wallet.transactions = [1, 6, 8, 15, 39, 45, 7];
  const maxResult = wallet.getMax();
  const minResult = wallet.getMin();

  expect(maxResult).toEqual(45);
  expect(minResult).toEqual(1);
});

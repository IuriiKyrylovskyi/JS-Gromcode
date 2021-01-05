import { withdraw } from './withdraw';

it("should count client's balance", () => {
  const clients = ['Ann', 'John', 'User'];
  const balances = [1400, 87, -6];
  const client = 'John';
  const amount = 50;

  const result = withdraw(clients, balances, client, amount);

  expect(result).toEqual(37);
});

it("should check '+' client's balance and return '-1' in case of '-' one", () => {
  const clients = ['Ann', 'John', 'User'];
  const balances = [1400, 7, -6];
  const client = 'John';
  const amount = 50;

  const result = withdraw(clients, balances, client, amount);

  expect(result).toEqual(-1);
});

it('should check the name of function', () => {
  const clients = ['Ann', 'John', 'User'];
  const balances = [1400, 7, -6];
  const client = 'User';
  const amount = 1;

  const result = withdraw(clients, balances, client, amount);

  expect(result).toEqual(-1);
});

import { bindApplay, bindCall } from './refresh';

it('bind via apply and call', () => {
  const context = {
    name: 'Tom',
  };

  function func(age) {
    return `${this.name} is ${age} years old`;
  }
  const bind1 = bindApplay(func, context, 25)();

  expect(bind1).toEqual('Tom is 25 years old');
});
it('bind via apply and call', () => {
  const context = {
    name: 'Tom',
  };

  function func(age) {
    return `${this.name} is ${age} years old`;
  }
  const bind2 = bindCall(func, context, 28)();

  expect(bind2).toEqual('Tom is 28 years old');
});

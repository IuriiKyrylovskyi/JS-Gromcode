import { bind4 } from './index';

it('should bind', () => {
  const context = {
    name: 'Tom',
  };
  function func(age) {
    return `${this.name} is ${age} years old`;
  }
  const result = bind4(func, context, 30)();

  expect(result).toEqual('Tom is 30 years old');
});

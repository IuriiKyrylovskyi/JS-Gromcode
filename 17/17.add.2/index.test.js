import { bind } from './index';

it('should bind', () => {
  const context = {
    name: 'Tom',
  };
  const func = () => {
    console.log(this.name);
  };
  const result = bind(func, context)();

  expect(result).toEqual('Tom');
});

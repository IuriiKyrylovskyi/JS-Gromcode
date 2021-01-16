import { defer } from './refresh';

it('should delay', () => {
  const user = {
    message: 'hello',
    getMes() {
      return `${this.message}`;
    },
  };
  const result = defer(user.getMes(), 0);

  expect(result).toEqual('hello');
});

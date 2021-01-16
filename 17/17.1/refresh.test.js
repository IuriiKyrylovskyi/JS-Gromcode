import { user } from './refresh';

it('should return full name', () => {
  const result = user.getFullName();

  expect(result).toEqual('John Doe');
});

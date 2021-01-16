import { user } from './refresh';

it('should return full name', () => {
  user.setFullName('John Doe');
  const result = user.getFullName();
  const name = user.firstName;

  expect(result).toEqual('John Doe');
  expect(name).toEqual('John');
});

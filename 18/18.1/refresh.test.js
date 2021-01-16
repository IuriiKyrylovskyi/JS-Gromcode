import { event } from './refresh';

it('should filter adults', () => {
  const result = event.getInvitations();

  expect(result).toEqual([
    { email: 'aaa@mail', message: 'Dear Ann! Welcome to the party!' },
    { email: 'kkk@mail', message: 'Dear Kate! Welcome to the party!' },
    { email: 'ttt@mail', message: 'Dear Tom! Welcome to the party!' },
    { email: 'ddd@mail', message: 'Dear Dick! Welcome to the party!' },
    { email: 'iii@mail', message: 'Dear Tim! Welcome to the party!' },
    { email: 'yyy@mail', message: 'Dear Irvy! Welcome to the party!' },
  ]);
});

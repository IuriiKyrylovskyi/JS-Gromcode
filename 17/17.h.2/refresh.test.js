import { sayNameTest } from './refresh';

it('show name', () => {
  const bruce = {
    name: 'Bruce',
  };
  const result = sayNameTest.apply(bruce);

  expect(result).toEqual(console.log('Bruce'));
});

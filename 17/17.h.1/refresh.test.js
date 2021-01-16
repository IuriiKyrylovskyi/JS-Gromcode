import { sayName } from './refresh';

it('show name', () => {
  const bruce = {
    name: 'Bruce',
  };
  const result = sayName.call(bruce);

  expect(result).toEqual(console.log('Bruce'));
});

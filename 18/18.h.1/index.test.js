import { saveCalls } from './index';

it('should test', () => {
  function test(a, b) {
    return Math.sqrt(a * a + b * b);
  }
  const testWithMemory = saveCalls(test);
  testWithMemory(4, 2);
  testWithMemory(9, 1);

  const result = testWithMemory.calls;

  expect(result).toEqual([
    [4, 2],
    [9, 1],
  ]);
});

// function test(a, b) {
//     return Math.sqrt(a * a + b * b);
// }

// const testWithMemory = saveCalls(test);
// testWithMemory(4, 2);
// testWithMemory(9, 1);

// testWithMemory.calls // [ [4, 2], [9, 1] ]

// /* Поддержка функций с контекстом */

it('should test with this', () => {
  const user = {
    name: 'John',
    sayHi() {
      return this.name;
    },
  };

  const methodWithMemory = saveCalls(user.sayHi);
  methodWithMemory.apply({ name: 'Tom' }); // 'Tom';

  const result = methodWithMemory.calls; // [ [] ]

  expect(result).toEqual([[]]);
});

// const user = {
//     name: 'John',
//     sayHi() {
//         return this.name;
//     }
// };

// const methodWithMemory = saveCalls(user.sayHi);

// methodWithMemory.apply({ name: 'Tom' }); // 'Tom'

// methodWithMemory.calls // [ [] ]

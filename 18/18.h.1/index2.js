export function saveCalls(func) {
  const calls = [];
  function withMemory(...args) {
    calls(() => {
      const funcArgs = func.apply(this, [args]);
      this.calls.push(funcArgs);
      return this.calls;
    });
  }
  return withMemory;
}

// const arr = [
//   [1, 2],
//   [3, 4],
// ];

// const arrAdd = [5, 6];
// arr.push(arrAdd);
// console.log('concat ', arr.concat(arrAdd));
// console.log('push ', arr);

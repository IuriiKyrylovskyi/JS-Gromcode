export function saveCalls(func) {
  const array = [];
  function withMemory(...args) {
    array.push(args);
    return func.apply(this, args);
  }

  withMemory.calls = array;

  return withMemory;
}

// // ========================
// export function saveCalls(func) {
//   const calls = [];
//   // withMemory.calls;
//   return function withMemory(...args) {
//     calls: calls, (this.calls = func.apply(this, args));
//     calls.push(this.calls);
//     return calls;
//   };
// }

// const arr = [
//   [1, 2],
//   [3, 4],
// ];

// const arrAdd = [5, 6];
// arr.push(arrAdd);
// console.log('concat ', arr.concat(arrAdd));
// console.log('push ', arr);

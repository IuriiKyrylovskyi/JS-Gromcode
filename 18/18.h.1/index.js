export function saveCalls(func) {
  const array = [];
  function withMemory(...args) {
    func.apply(this, args);
    array.push(args);
    return array;
  }
  withMemory.calls = array;
  return withMemory;
}

// export function saveCalls(func) {
//   function withMemory(...args) {
//     withMemory.calls.push(args);
//     return func.apply(this, args);
//   }

//   withMemory.calls = [];

//   return withMemory;
// }
// https://learn.javascript.ru/closures

// // ========================

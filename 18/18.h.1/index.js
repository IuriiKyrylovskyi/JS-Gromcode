// export function saveCalls(func) {
//   function withMemory([...args, [...rest]]) {
//     const callsObj = {
//       callsArr: [...args, [...rest]],
//     };
// 		callsObj.calls = Object.values(callsObj)
// 			.reduce((arr, el) => arr.concat(el), Object.values(callsObj));
//   }
// 	return withMemory;
// }

const calls = [];
export function saveCalls(func) {
  function withMemory(...rest) {
    func.apply(this, calls.concat(rest));
  }
  return withMemory;
}

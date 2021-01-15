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

const calls = {
	calls: [],
}

export function saveCalls(func) {
	function withMemory(...args,[...rest]) {
		func.apply(this, args.concat(rest));
	}
	return withMemory();
}
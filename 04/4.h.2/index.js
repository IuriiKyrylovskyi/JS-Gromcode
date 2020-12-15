const m = 3;
const n = 36;
let result = 0;

for (let i = m; i <= n; i++){
	if (i % 5 === 0) {
		console.log(i);
	} else if (i % 2 === 0 && i % 4 !== 0) {
		result += i;
		// console.log(result);
	} else 	if (i % 3 === 0) {
		result -= i;
		// console.log(result);

	} else if (i % 4 === 0) {
		result *= i;
		// console.log(result);
	} else {
		continue;
	}
}

// console.log(result);
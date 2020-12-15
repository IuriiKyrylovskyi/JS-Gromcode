function getSum(n, m) {
	let sum = 0;
	for (let i = n; i <= m; i++){
		if (i % 2 === 0) {
			sum += i;
		}
	}
	return sum;
}

function getSum2(n, m) {
	let sum = 0;
	for (let i = n; i <= m; i++){
		if (i % 2 === 1) {
			continue;
		}
		sum += i;
	}
	return sum;
}

const getSumArrow = (n, m) => {
	let sum = 0;
	for (let i = n; i <= m; i++){
		if (i % 2 !== 0) {
			continue;
		}
		console.log(sum += i);
	}
	return sum;
}

console.log(getSum(2,10));
console.log(getSum2(2,10));
console.log(getSumArrow(2,10));
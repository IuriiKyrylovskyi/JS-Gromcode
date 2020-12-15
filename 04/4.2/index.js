const m = 2;
const n = 138;
let result = 1;

for (let i = m; i <= n; i++){
	if (i % 2 === 0) continue;
	result *= i;
}

console.log(result);

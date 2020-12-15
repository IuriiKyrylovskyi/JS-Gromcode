const n = 15;
let i = 1;
let sum = String();

while (n >= i) {
	sum += String(i);
	i += 1;
}
console.log(sum);

// =================

let summ = String();
for (let i = 1; i <= n; i++){
	summ += i;
}

console.log(summ);
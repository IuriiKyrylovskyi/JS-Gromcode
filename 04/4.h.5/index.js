let sum = 0;

for (let i = 1; i <= 1000; i++){
	sum += i;
}

let wholePartOfDivision = Math.trunc(sum / 1234);
// console.log(wholePartOfDivision);
let leftPartOfDivision = sum % 1234;
// console.log(leftPartOfDivision);
console.log('true' ? wholePartOfDivision > leftPartOfDivision : 'false');


function getEvenOdd(num) {
	if (num % 2 === 0) {
		return 'even';
	} else {
		return 'odd';
	}
}

const getEvenOddArrow = num => num % 2 === 0 ? 'even' : 'odd';
console.log(getEvenOddArrow(15));
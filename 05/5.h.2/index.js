function increaser(a, index) {
	if (a > index) {
		a += index;
	} else {
		return a;
	}
	return a;
}

const increaserVar = function (a, index) {
		if (a > index) {
		a += index;
	} else {
		return a;
	}
	return a;
}

const increaserArrow = (a, index) => a > index ? a += index : a;

console.log(increaser(20,10));
console.log(increaserVar(4,10));
console.log(increaserArrow(50,10));
// export
const maxFibonacci = number => {
	if (number === 0) return 0;

	if (number === 1) return 1;

	return maxFibonacci(number - 1) + maxFibonacci(number - 2);
	
	
	// let result = 0;
	

	// const calcMaxFibonacci = {
	// 	add(value) {
	// 		result += value;
	// 		return this ;
	// 	},
	// 	result() {
	// 		return result;
	// 	}
	// };


  // return calcMaxFibonacci;
};


console.log(maxFibonacci(8));
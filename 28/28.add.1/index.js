// export
const maxFibonacci = number => {
  let result = 0;

	const calcMaxFibonacci = {
		add(value) {
			result += value;
			return this ;
		},
		result() {
			return result;
		}
	};


  return calcMaxFibonacci;
};


const fib = prev => next => {
	[].reduce((acc, ))

}
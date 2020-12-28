const ADULT = 18;

const getAdults = obj =>
  Object.entries(obj)
    .filter(item => item[1] >= ADULT)
    .map(item => item[0]);

  

console.log(getAdults({ 'John Doe': 19, 'Tom': 17, 'Bob': 18 }));
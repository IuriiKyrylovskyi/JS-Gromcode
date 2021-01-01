const getTotalPrice = arr => '$' + String(Math.floor(arr.reduce((sum, item) => sum + item, 0)*100)/100);

console.log(getTotalPrice([5, 2.361, 7.237, 4]));
console.log(typeof getTotalPrice([5, 2.361, 7.237, 4]));

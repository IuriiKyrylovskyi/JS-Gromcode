// export
const getDiff = (startDate, endDate) => {
  const start = new Date(startDate);
  const end = new Date(endDate);

  const diff = Math.abs(end - start);

  const getDays = Math.floor(diff / 1000 / 60 / 60 / 24);
  const getYears = new Date(diff).getUTCFullYear() - 1970;
  const getHours = new Date(diff).getUTCHours();
  const getMinutes = new Date(diff).getUTCMinutes();
  const getSeconds = new Date(diff).getUTCSeconds();

  return `${getYears}y ${getDays}d ${getHours}h ${getMinutes}m ${getSeconds}s`;
};

const data2 = new Date(2020, 0, 2, 12, 40, 20);
const data1 = new Date(2022, 1, 22, 10, 30, 10);
const result = getDiff(data1, data2);
console.log(data1);
console.log(data2);

console.log('result', result);
// console.log(typeof result);

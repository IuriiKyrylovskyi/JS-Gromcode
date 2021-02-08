// const formatter = new Intl.DateTimeFormat('en', {
//   // timeZone: 'UTC',
//   day: 'numeric',
//   hour: 'numeric',
//   minute: 'numeric',
//   second: 'numeric',
//   hour12: false,
// });

// export
const getDiff = (startDate, endDate) => {
  const start = new Date(startDate);
  const end = new Date(endDate);

  const diff = Math.abs(end - start);
  // const period = formatter.format(diff);
  // console.log('period', period);
  // console.log(start);
  // console.log(end);
  // console.log(diff);
  // const getYears = new Date(formatter.format(diff)).getFullYear();
  // console.log('y', getYears);
  // const getDays = new Date(period).getDate() - 1;
  // console.log('d', getDays);
  const getHours = new Date(diff).getHours();
  // console.log('h', getHours);
  const getMinutes = new Date(diff).getMinutes();
  // console.log('m', getMinutes);
  const getSeconds = new Date(diff).getSeconds();
  // console.log('s', getSeconds);

  const days = Math.floor(diff / 1000 / 60 / 60 / 24);
  // console.log('days calc', days);
  // const hours = Math.floor(diff / 1000 / 60 / 60);
  // console.log('hours calc', hours);
  // const minutes = Math.floor(diff / 1000 / 60);
  // console.log('minutes calc', minutes);
  // const seconds = Math.floor(diff / 1000);
  // console.log('seconds calc', seconds);

  return `${days}d ${getHours}h ${getMinutes}m ${getSeconds}s`;
};

const data2 = new Date(2020, 0, 2, 12, 40, 20);
const data1 = new Date(2020, 11, 4, 5, 55, 3);
const result = getDiff(data1, data2);
console.log(data1);
console.log(data2);

console.log('result', result);
// console.log(typeof result);

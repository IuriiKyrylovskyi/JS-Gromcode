export const dayOfWeek = (date, days) => {
  const weeksDays = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'St'];
  const enteredDate = new Date(date).getDate();
  const upDate = new Date().setDate(enteredDate + days);

  // console.log('1 ', new Date()); // utc now
  // console.log('2 ', new Date(date)); // 4.03.21.22:00 ?????? constant!!!
  // console.log('2.1 ', date); // 4.03.21.22:00 ?????? constant!!!
  // console.log('3 ', new Date().setDate(enteredDate)); // timestamp
  // console.log('4 ', new Date(1612725079662)); // timestamp
  // console.log('5 ', enteredDate); // 5
  // console.log('6 ', upDate); // timestamp of day = 5 + 2 = 0
  // console.log('7 ', new Date(upDate)); // 9.02.2021
  // console.log('7.1 ', new Date(1612897603707)); // 9.02.2021
  // // return new Date(upDate).getDay();
  return weeksDays[new Date(upDate).getDay()];
};

// const result = dayOfWeek(new Date(2021, 2, 7), 2);
// console.log(result);

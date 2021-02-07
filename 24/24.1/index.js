export const dayOfWeek = (date, days) => {
  const weeksDays = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'St'];
  const enteredDate = new Date(date).getDate();
  const upDate = new Date(date).setDate(enteredDate + days);

  // console.log(upDate);
  // console.log(new Date(upDate));
  // return new Date(upDate).getDay();
  return weeksDays[new Date(upDate).getDay()];
};

// const result = dayOfWeek(new Date(2021, 2, 5), 2);
// console.log(result);

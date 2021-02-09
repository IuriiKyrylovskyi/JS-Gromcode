// algorithm

// export
const studentsBirthDays = students => {
  if (!Array.isArray(students)) {
    return;
  }
  // test------------------------------------------------------------------
  const test = students[0].birthDate;
  console.log(test); // 07/06/2002
  console.log(new Date(test)); // 2002-07-05T21:00:00.000Z
  console.log(new Date(test).getMonth()); // 6
  console.log(new Date(test).toLocaleString('en', { month: 'short' })); // Jul

  console.log(
    'getMonth ',
    new Intl.DateTimeFormat('en', { month: 'short' }).format(new Date(test)),
  ); // Jul

  // ----------------------------------------------------------------------
	const formatter = new Intl.DateTimeFormat('en', { month: 'short' });

	const getMonthsArr = monthBirthSortedArr.map(student =>
		formatter.format(new Date(student.birthDate)),
	);

	const getUniqMonthsArr = [...new Set(getMonthsArr)];

  const monthBirthSortedArr = [...students].sort(
    (studentPrev, studentNext) =>
      new Date(studentPrev.birthDate).getMonth() - new Date(studentNext.birthDate).getMonth(),
  ).map({});
  console.log('monthBirthSortedArr: ', monthBirthSortedArr);


  console.log('getMonthsArr: ', getMonthsArr);
  console.log('getUniqMonthsArr: ', getUniqMonthsArr);
  return monthBirthSortedArr;
  // return sortedByBirth;
};

const group = [
  { name: 'Ann', birthDate: '07/06/2002' },
  { name: 'Bob', birthDate: '11/17/1995' },
  { name: 'Bill', birthDate: '01/20/2000' },
  { name: 'Kate', birthDate: '03/23/1990' },
  { name: 'Tom', birthDate: '01/15/1987' },
];

console.log('result = ', studentsBirthDays(group));
console.log('init arr ', group);

const monthArr = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

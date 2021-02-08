// export
const studentsBirthDays = students => {
  if (!Array.isArray(students)) {
    return;
  }
  console.log(students[0].birthDate);

  const getMonthName = new Intl.DateTimeFormat('en', { month: 'short' });
  const getMonthName = new Date().toLocalString('en', { month: 'short' });

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

  const monthBirthSortedArr = [...students].sort(
    (studentPrev, studentNext) =>
      new Date(studentPrev.birthDate).getMonth() - new Date(studentNext.birthDate).getMonth(),
  );
  const monthGroupedArr = monthBirthSortedArr.filter(student =>
    new Date(student.birthDate).getMonth(),
  );
  console.log('monthArr: ', monthGroupedArr);
  console.log('getMonthName: ', getMonthName);

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

console.log(studentsBirthDays(group));
console.log(group);

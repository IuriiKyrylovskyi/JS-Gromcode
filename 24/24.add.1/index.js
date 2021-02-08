// export
const studentsBirthDays = students => {
  if (!Array.isArray(students)) {
    return;
  }
  console.log(students[0].birthDate);

  const formatter = new Intl.DateTimeFormat('en', {
    month: 'numeric',
    day: 'numeric',
    year: 'numeric',
  });

  const date = new Date();
  const sortedArr = [...students].map(student => formatter(parseInt(student.birthDate));
  // 	.sort(
  //   (studentPrev, studentNext) => parseInt(studentPrev.birthDate) - parseInt(studentNext.birthDate),
  // );

  return sortedArr;
  // return sortedByBirth;
};

const group = [
  { name: 'Tom', birthDate: '01/15/1987' },
  { name: 'Ann', birthDate: '07/06/2002' },
  { name: 'Bill', birthDate: '01/20/2000' },
  { name: 'Kate', birthDate: '03/23/1990' },
  { name: 'Bob', birthDate: '11/17/1995' },
];

console.log(studentsBirthDays(group));

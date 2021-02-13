// algorithm

// export
const studentsBirthDays = students => {
  if (!Array.isArray(students)) {
    return;
  }
  // // test------------------------------------------------------------------
  // const test = students[0].birthDate;
  // console.log(test); // 07/06/2002
  // console.log(new Date(test)); // 2002-07-05T21:00:00.000Z
  // console.log(new Date(test).getMonth()); // 6
  // console.log(new Date(test).toLocaleString('en', { month: 'short' })); // Jul

  // console.log(
  //   'getMonth ',
  //   new Intl.DateTimeFormat('en', { month: 'short' }).format(new Date(test)),
  // ); // Jul

  // // ----------------------------------------------------------------------
  const formatter = new Intl.DateTimeFormat('en', { month: 'short' });

  const monthBirthSorted = [...students]
    .sort(
      (studentPrev, studentNext) =>
        new Date(studentPrev.birthDate).getMonth() - new Date(studentNext.birthDate).getMonth(),
    )
    // .map(student => {
    //   student.birthDate = formatter.format(new Date(student.birthDate));
    //   return student;
    // });

    // const testArr = arr =>
    // 	arr
    .reduce((obj, item) => {
      item.birthDate = formatter.format(new Date(item.birthDate));

      obj[item.birthDate] = obj[item.birthDate] || [];
      obj[item.birthDate].push(item.name);
      return obj;
    }, {});

  // console.log(testArr(monthBirthSorted));

  // .map(student => new Array(formatter.format(new Date(student.birthDate)) + ': ' + student.name)); // [],[]
  // .map(student => {
  //   student.birthDate = formatter.format(new Date(student.birthDate));
  //   return student;
  // }); // { name: 'Bill', birthDate: 'Jan' },

  console.log('monthBirthSorted: ', monthBirthSorted);
  // console.log('monthBirthSorted[0][1]: ', monthBirthSorted[0].birthDate);

  // const getMonths = monthBirthSorted.map(student => formatter.format(new Date(student.birthDate)));
  // const getNames = monthBirthSorted.map(student => student.name);

  // const getUniqMonths = [...new Set(getMonths)];

  // console.log('getMonths: ', getMonths);
  // console.log('getNames: ', getNames);
  // console.log('getUniqMonths: ', getUniqMonths);
};

const group = [
  { name: 'Ann', birthDate: '07/06/2002' },
  { name: 'Bob', birthDate: '11/17/1995' },
  { name: 'Bill', birthDate: '01/20/2000' },
  { name: 'Kate', birthDate: '03/11/1993' },
  { name: 'Kate', birthDate: '03/23/1990' },
  { name: 'Tom', birthDate: '01/15/1987' },
  { name: 'Cruze', birthDate: '03/05/1984' },
];

console.log('result = ', studentsBirthDays(group));
console.log('init arr ', group);

// const monthArr = [
//   'Jan',
//   'Feb',
//   'Mar',
//   'Apr',
//   'May',
//   'Jun',
//   'Jul',
//   'Aug',
//   'Sep',
//   'Oct',
//   'Nov',
//   'Dec',
// ];

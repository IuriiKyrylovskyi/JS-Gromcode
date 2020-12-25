const getMessagesForBestStudents = (groupArr, failedArr) => 
  groupArr
    .filter(name => !failedArr.includes(name))
    .map(name => 'Good job, ' + name);


const groups = ['Nick', 'Bob', 'Tom', 'Ann', 'Kate'];
const groupFailed = ['Nick', 'Bob', 'Kate'];
console.log(getMessagesForBestStudents(groups, groupFailed));

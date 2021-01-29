const taskStatus = document.querySelector('.task-status');

const changeStatus = () => {
  // if (taskStatus.checked) {
  //   console.log('true');
  //   console.log('taskStatus.value true', taskStatus.checked);
  // } else {
  //   console.log('false');
  //   console.log('taskStatus.value false', taskStatus.checked);
  // }
  console.log(taskStatus.checked);
};

taskStatus.addEventListener('change', changeStatus);

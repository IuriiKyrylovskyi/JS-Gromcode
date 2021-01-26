const taskStatus = document.querySelector('.task-status');

const changeStatus = () => {
  if (taskStatus.checked) {
    console.log('true');
  } else {
    console.log('false');
  }
  console.log('taskStatus.value ', taskStatus.checked);
};

taskStatus.addEventListener('change', changeStatus);

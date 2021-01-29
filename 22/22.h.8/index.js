const taskStatus = document.querySelector('.task-status');

const getCheckboxStatus = event => {
  console.log(event.target.checked);
};

taskStatus.addEventListener('change', getCheckboxStatus);

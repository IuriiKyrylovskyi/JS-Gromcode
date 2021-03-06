import { renderTasks } from './renderTasks.js';
import { changeStatus } from './task.js';

const MIN_TASK_LENGTH = 5;

export const validateTaskLength = inputText => inputText.length >= MIN_TASK_LENGTH; // ? true: false;

export const onChangeStatus = event => {
  const checkedId = event.target.getAttribute('data-id');

  if (!event.target.classList.contains('list__item-checkbox')) {
    return;
  }

  const taskText = event.target.closest('.list__item').innerText;
  // console.log('length', taskText.length);
  if (!validateTaskLength(taskText)) {
    event.preventDefault();
    alert('invalid task');
    return;
  }

  changeStatus(checkedId, event.target.checked);
  
  renderTasks();
};

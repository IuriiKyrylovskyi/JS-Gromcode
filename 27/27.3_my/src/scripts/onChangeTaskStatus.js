import { getItem, setItem } from './storage.js';
import { renderTasks } from './renderTasks.js';

const minTaskNameLength = 5;

export const validateTaskLength = inputText => inputText.length >= minTaskNameLength; // ? true: false;

export const onChangeStatus = event => {
  const checkedId = event.target.getAttribute('data-id');

  if (!event.target.classList.contains('list__item-checkbox')) {
    return;
  }

  const taskText = event.target.closest('.list__item').innerText;
  console.log('length', taskText.length);
  if (!validateTaskLength(taskText)) {
    event.preventDefault();
    alert('invalid task');
    return;
  }

  const changedTask = getItem('tasksList').find(el => el.id === +checkedId);
  changedTask.done = event.target.checked;

  console.log('done tasks on change', getItem);
  renderTasks();
};

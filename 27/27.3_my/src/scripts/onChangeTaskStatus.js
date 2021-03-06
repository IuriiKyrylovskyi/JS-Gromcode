// import { getItem, setItem } from './storage.js';
import { renderTasks } from './renderTasks.js';
import { changeStatus } from './task.js';

const MIN_TASK_LENGTH = 5;

export const validateTaskLength = inputText => inputText.length >= MIN_TASK_LENGTH; // ? true: false;

export const onChangeStatus = event => {
  // const checkedId = event.target.getAttribute('data-id');

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

  changeStatus(event);

  // const changedTaskList = getItem('tasksList').map(task => {
  //   if (task.id === Number(checkedId)) {
  //     // console.log(task);
  //     // console.log(task.done);
  //     // console.log(event.target.checked);

  //     task.done = event.target.checked;
  //     task.data = new Date().getTime();
  //     // console.log(task.done);
  //   }
  //   return task;
  // });

  // setItem('tasksList', changedTaskList);
  // console.log('done tasks on change', getItem('tasksList'));
  renderTasks();
};

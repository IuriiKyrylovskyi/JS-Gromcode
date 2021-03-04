// import { getItem, setItem } from './storage.js';
import { validateTaskLength } from './onChangeTaskStatus.js';
import { renderTasks } from './renderTasks.js';
import { createNewTask } from './createTask.js';

export const newTaskHandler = () => {
  const newTaskText = document.querySelector('.task-input').value;
  // console.log(newTaskText.length);

  if (!validateTaskLength(newTaskText)) {
    alert('enter valid task');
    newTaskText.textContent = null;
    // newTaskText.innerHTML = '';
    return;
  }
  // else {
  createNewTask(newTaskText);
  // }
  // setItem('tasksList', createNewTask(newTaskText));

  renderTasks();

  // console.log(tasks);
};

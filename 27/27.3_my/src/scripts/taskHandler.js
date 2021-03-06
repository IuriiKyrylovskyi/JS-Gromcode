import { validateTaskLength } from './onChangeTaskStatus.js';
import { renderTasks } from './renderTasks.js';
import { createNewTask } from './task.js';

export const newTaskHandler = () => {
  const newTaskText = document.querySelector('.task-input');
  // console.log(newTaskText.length);

  if (!validateTaskLength(newTaskText.value)) {
    alert('enter valid task');

    newTaskText.textContent = null;
    // console.log(newTaskText.textContent);
    renderTasks();

    return;
  }

  createNewTask(newTaskText.value);
  
  renderTasks();

};

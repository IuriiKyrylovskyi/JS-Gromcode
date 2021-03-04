import { getItem, setItem } from './storage.js';
import { validateTaskLength } from './onChangeTaskStatus.js';
import { renderTasks } from './renderTasks.js';
import { createNewTask } from './createTask.js';

export const addNewTask = () => {
  const newTaskText = document.querySelector('.task-input').value;
  // console.log(newTaskText.length);

  if (validateTaskLength(newTaskText)) {
    alert('enter valid task');
  } else {
    createNewTask();
  }
  setItem('tasksList', newTaskObj);

  renderTasks();

  // console.log(tasks);
};
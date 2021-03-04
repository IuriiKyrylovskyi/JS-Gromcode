// import { getItem, setItem } from './storage.js';
import { unvalidTaskLength } from './onChangeTaskStatus.js';
import { renderTasks } from './renderTasks.js';
import { createNewTask } from './createTask.js';

export const newTaskHandler = () => {
  const newTaskText = document.querySelector('.task-input').value;
  // console.log(newTaskText.length);

  if (unvalidTaskLength(newTaskText)) {
    alert('enter valid task');
  } else {
    createNewTask(newTaskText);
  }
  // setItem('tasksList', createNewTask(newTaskText));

  renderTasks();

  // console.log(tasks);
};

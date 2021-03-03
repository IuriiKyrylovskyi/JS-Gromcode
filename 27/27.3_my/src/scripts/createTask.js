import { getItem, setItem } from './storage.js';
import { validateTaskLength } from './onChangeTaskStatus.js';
import { renderTasks } from './renderTasks.js';

export const addNewTask = () => {
  const newTaskText = document.querySelector('.task-input').value;
  // console.log(newTaskText.length);

  if (validateTaskLength(newTaskText)) {
    alert('enter valid task');
  } else {
    const idNum = getItem('tasksList').length + 1;
    const newTaskObj = {
      text: newTaskText,
      done: false,
      id: idNum,
    };
    return setItem('tasksList', newTaskObj);
  }
  renderTasks();

  // console.log(tasks);
};

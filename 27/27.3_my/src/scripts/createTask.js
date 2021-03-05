import { getItem, setItem } from './storage.js';

export const createNewTask = newTaskText => {
  const idNum = new Date().getTime();

  console.log(idNum);

  const newTaskObj = {
    text: newTaskText,
    done: false,
    id: idNum,
  };
  const tasks = getItem('tasksList') || [];
  const newTasks = tasks.concat(newTaskObj);

  setItem('tasksList', newTasks);
  console.log(setItem('tasksList', newTasks));
};

import { setItem } from './storage.js';

export const createNewTask = newTaskText => {
  
  const idNum = new Date().getTime();

  console.log(idNum);

  const newTaskObj = {
    text: newTaskText,
    done: false,
    id: idNum,
  };

  setItem('tasksList', newTaskObj);
 
};

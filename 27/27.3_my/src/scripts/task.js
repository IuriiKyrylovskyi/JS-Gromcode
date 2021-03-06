import { getItem, setItem } from './storage.js';

const tasks = () => getItem('tasksList') || [];

export const createNewTask = newTaskText => {
  const idNum = new Date().getTime();
  const doneDataNum = new Date().getTime();

  console.log(idNum);

  const newTaskObj = {
    text: newTaskText,
    done: false,
    id: idNum,
    data: doneDataNum,
  };
  const newTasks = tasks().concat(newTaskObj);

  setItem('tasksList', newTasks);
  console.log(tasks);
};

export const changeStatus = (id, status) => {
  const changedTaskList = tasks().map(task => {
    if (task.id === Number(id)) {
      // console.log(task);
      // console.log(task.done);
      // console.log(event.target.checked);

      task.done = status;
      task.data = new Date().getTime();
      // console.log(task.done);
    }
    return task;
  });

  setItem('tasksList', changedTaskList);
};

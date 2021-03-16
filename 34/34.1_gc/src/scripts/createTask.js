import { renderTasks } from './renderTasks.js';
import { getItem, setItem } from './storage.js';

export const onCreateTask = () => {
  const taskTitleInputElem = document.querySelector('.task-input');

  const text = taskTitleInputElem.value;

  if (!text) {
    return;
  }
  taskTitleInputElem.value = '';
  const tasksList = getItem('tasksList') || [];

  const newTasksList = tasksList.concat({
    text,
    done: false,
    createDate: new Date().toISOString(),
    id: Math.random().toString(),
  });

  setItem('tasksList', newTasksList);

  renderTasks();
};

// ===========================================
// import { getItem, setItem } from './storage.js';
// import { validateTaskLength } from './onChangeTaskStatus.js';
// import { renderTasks } from './renderTasks.js';

// export const addNewTask = () => {
//   const newTaskText = document.querySelector('.task-input').value;
//   // console.log(newTaskText.length);

//   if (validateTaskLength(newTaskText)) {
//     alert('enter valid task');
//   } else {
//     const idNum = getItem('tasksList').length + 1;
//     const newTaskObj = {
//       text: newTaskText,
//       done: false,
//       id: idNum,
//     };
//     setItem.push(newTaskObj);
//   }
//   renderTasks(getItem);

//   // console.log(tasks);
// };

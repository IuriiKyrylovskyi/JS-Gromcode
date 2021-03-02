import { getItem } from './storage.js';

const listElem = document.querySelector('.list');

const createCheckbox = ({ done, id }) => {
  const checkboxElem = document.createElement('input');
  checkboxElem.setAttribute('data-id', id);
  checkboxElem.setAttribute('type', 'checkbox');
  checkboxElem.checked = done;
  checkboxElem.classList.add('list__item-checkbox');

  return checkboxElem;
};

const createListItem = ({ text, done, id }) => {
  const listItemElem = document.createElement('li');
  listItemElem.classList.add('list__item');

  const checkboxElem = createCheckbox({ done, id });
  if (done) {
    listItemElem.classList.add('list__item_done');
  }
  listItemElem.append(checkboxElem, text);

  return listItemElem;
};

export const renderTasks = () => {
  const tasksList = getItem('tasksList') || [];

  listElem.innerHTML = '';
  const tasksElems = tasksList.sort(compareTasks).map(createListItem);

  listElem.append(...tasksElems);
};

// =============================
// export const renderTasks = tasksList => {
//   const listElem = document.querySelector('.list');
//   const inputElem = document.querySelector('.task-input');

//   listElem.innerHTML = ''; // * from add new task
//   inputElem.value = ''; // * from add new task

//   const tasksElems = tasksList
//     .sort((a, b) => a.done - b.done)
//     .map(({ text, done, id }) => {
//       const listItemElem = document.createElement('li');
//       listItemElem.classList.add('list__item');
//       const checkbox = document.createElement('input');

//       checkbox.setAttribute('data-id', id);

//       checkbox.setAttribute('type', 'checkbox');
//       checkbox.checked = done;
//       checkbox.classList.add('list__item-checkbox');
//       if (done) {
//         listItemElem.classList.add('list__item_done');
//       }
//       listItemElem.append(checkbox, text);

//       return listItemElem;
//     });

//   listElem.append(...tasksElems);
// };

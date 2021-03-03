import { getItem } from './storage.js';

const tasksList = getItem('tasksList');

export const renderTasks = tasksList => {
  const listElem = document.querySelector('.list');
  const inputElem = document.querySelector('.task-input');

  listElem.innerHTML = ''; // * from add new task
  inputElem.value = ''; // * from add new task

  const tasksElems = tasksList
    .sort((a, b) => a.done - b.done)
    .map(({ text, done, id }) => {
      const listItemElem = document.createElement('li');
      listItemElem.classList.add('list__item');
      const checkbox = document.createElement('input');

      checkbox.setAttribute('data-id', id);

      checkbox.setAttribute('type', 'checkbox');
      checkbox.checked = done;
      checkbox.classList.add('list__item-checkbox');
      if (done) {
        listItemElem.classList.add('list__item_done');
      }
      listItemElem.append(checkbox, text);

      return listItemElem;
    });

  listElem.append(...tasksElems);
};

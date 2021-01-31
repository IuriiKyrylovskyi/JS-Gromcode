const listElem = document.querySelector('.list');

const tasks = [
  { text: 'Buy milk', done: false, id: 1 },
  { text: 'Pick up Tom from airport', done: true, id: 2 },
  { text: 'Visit party', done: false, id: 3 },
  { text: 'Visit doctor', done: false, id: 4 },
  { text: 'Buy meat', done: true, id: 5 },
];

const renderTasks = tasksList => {
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

renderTasks(tasks);

// =========== add new task ====================

const inputElem = document.querySelector('.task-input');
const createBtnElem = document.querySelector('.create-task-btn');

const addNewTask = () => {
  const newTaskText = inputElem.value;
  if (!newTaskText) {
    return;
  }
  listElem.innerHTML = '';
  const idNum = tasks.length + 1;
  const newTaskObj = {
    text: newTaskText,
    done: false,
    id: idNum,
  };
  tasks.push(newTaskObj);
  renderTasks(tasks);
  inputElem.value = '';
  console.log(tasks);
};

createBtnElem.addEventListener('click', addNewTask);

// =============================================================

const onChangeStatus = event => {
  const targetedElem = event.target.closest('.list__item');
  const checkedId = event.target.getAttribute('data-id');

  if (event.target.classList.contains('list__item-checkbox') && event.target.checked) {
    targetedElem.classList.add('list__item_done');
    tasks.map(obj => {
      if (obj.id === checkedId) {
        obj.done = true;
        console.log('done true', obj.done);
      }
      return obj;
    });
    console.log('true', event.target.checked);
    console.log('checkedId', checkedId);
  } else {
    tasks.filter(obj => {
      if (obj.id === checkedId) {
        obj.done = false;
        console.log('done false', obj.done);
      }
      return obj;
    });
    targetedElem.classList.remove('list__item_done');
    console.log('false', event.target.checked);
  }
};

listElem.addEventListener('change', onChangeStatus);

// const isChecked = event => {
//   const isCheckbox = event.target.classList.contains('list__item-checkbox');
//   if (isCheckbox.checked) {
//     isCheckbox.closest('.list__item').classList.add('list__item_done');
//   }
//   isCheckbox.closest('.list__item').classList.remove('list__item_done');
// };

// const onChangeStatus = () => {
//   const chbEl = Array.from(chboxEls).map(
//     el => {
//       if (!el.checked) {
//         el.closest('.list__item').classList.add('list__item_done');
//       }
//       el.closest('.list__item').classList.remove('list__item_done');
//     },
//     console.log(chbEl, chbEl.closest('.list__item')), // .classList.contains('list__item_done')),
//     // console.log(el.checked, el.closest('.list__item')), // .classList.contains('list__item_done')),
//   );
// };

// listElem.addEventlistener('click', isCheckedBox);

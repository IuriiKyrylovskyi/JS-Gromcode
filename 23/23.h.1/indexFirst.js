const listElem = document.querySelector('.list');

const tasks = [
  { text: 'Buy milk', done: false, id: 1 },
  { text: 'Pick up Tom from airport', done: true, id: 2 },
  { text: 'Visit party', done: false, id: 3 },
  { text: 'Visit doctor', done: false, id: 4 },
  { text: 'Buy meat', done: true, id: 5 },
];

// ============ start ==============
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

// ============= change checkbox status ================================================
const changeElDone = (array, idEl, status) => {
  array
    .filter(obj => obj.id === +idEl)
    .map(el => {
      el.done = status;
      return el;
    });
  return array;
};

const onChangeStatus = event => {
  const targetedElem = event.target.closest('.list__item');
  const checkedId = event.target.getAttribute('data-id');
  if (event.target.classList.contains('list__item-checkbox') && event.target.checked) {
    targetedElem.classList.add('list__item_done');
    changeElDone(tasks, checkedId, true);

    // tasks
    //   .filter(obj => obj.id === +checkedId)
    //   .map(el => {
    //     el.done = true;
    //     return el;
    //   });
    // console.log('true', event.target.checked);
    // console.log('checkedId true', checkedId);
  } else {
    targetedElem.classList.remove('list__item_done');
    changeElDone(tasks, checkedId, false);

    // tasks
    //   .filter(obj => obj.id === +checkedId)
    //   .map(el => {
    //     el.done = false;
    //     return el;
    //   });
    // console.log('false', event.target.checked);
    // console.log('checkedId false', checkedId);
  }
  console.log('done tasks', tasks);
  // return tasks;
};

listElem.addEventListener('change', onChangeStatus);

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
  // console.log(tasks);
};

createBtnElem.addEventListener('click', addNewTask);

// // --- test ----
// const idis = 5;
// console.log(tasks[4]);

// const test = tasks
//   .filter(obj => obj.id === idis)
//   .map(el => {
//     el.done = false;
//     return el;
//   });

// console.log(test);

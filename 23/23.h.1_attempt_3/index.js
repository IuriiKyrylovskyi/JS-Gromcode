// algorithm
// Handlers:
// 1. create handler to change array element 'done' status on checkbox click
// 2. create handler to add new undone (not empty) task in array on click 'create' button
// Render:
// 1. clear html list
// 2. clear input field
// 3. render new data array in filtered oder

const listElem = document.querySelector('.list');
const inputElem = document.querySelector('.task-input');
const createBtnElem = document.querySelector('.create-task-btn');

const tasks = [
  { text: 'Buy milk', done: false, id: 1 },
  { text: 'Pick up Tom from airport', done: true, id: 2 },
  { text: 'Visit party', done: false, id: 3 },
  { text: 'Visit doctor', done: false, id: 4 },
  { text: 'Buy meat', done: true, id: 5 },
];

// ============ start ==============
const renderTasks = tasksList => {
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

renderTasks(tasks);

// ============= change checkbox status ================================================
const onChangeStatus = event => {
  const checkedId = event.target.getAttribute('data-id');

  if (!event.target.classList.contains('list__item-checkbox')) {
    return;
  }
  const changedTask = tasks.find(el => el.id === +checkedId);
  changedTask.done = event.target.checked;

  renderTasks(tasks);
  // console.log('done tasks', tasks);
};

listElem.addEventListener('click', onChangeStatus);

// =========== add new task ====================
const validateTaskLength = inputText => inputText.length < 5; // ? true: false;

console.log('valid', validateTaskLength('123'));
console.log('valid', validateTaskLength('123456'));

const addNewTask = () => {
  const newTaskText = inputElem.value;
  console.log(newTaskText.length);

  if (validateTaskLength(newTaskText)) {
    alert('enter valid task');
  } else {
    const idNum = tasks.length + 1;
    const newTaskObj = {
      text: newTaskText,
      done: false,
      id: idNum,
    };
    tasks.push(newTaskObj);
  }
  renderTasks(tasks);

  // console.log(tasks);
};

createBtnElem.addEventListener('click', addNewTask);

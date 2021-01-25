const tasks = [
  { text: 'Buy milk', done: false },
  { text: 'Pick up Tom from airport', done: false },
  { text: 'Visit party', done: false },
  { text: 'Visit doctor', done: true },
  { text: 'Buy meat', done: true },
];

const renderListItem = listItems => {
  const listElem = document.querySelector('.list');

  const listItemsElems = listItems
    .sort((a, b) => a.done - b.done)
    .map(({ text, done }) => {
      const listItemElem = document.createElement('li');
      listItemElem.classList.add('list__item');

      const checkboxElem = document.createElement('input');
      checkboxElem.classList.add('list__item-checkbox');
      checkboxElem.setAttribute('type', 'checkbox');
      // checkboxElem.setAttribute('checked', done);
      checkboxElem.checked = done;
      if (done) {
        listItemElem.classList.add('list__item_done');
      }

      listItemElem.append(checkboxElem, text);
      return listItemElem;
    });
  listElem.append(...listItemsElems);
};

renderListItem(tasks);


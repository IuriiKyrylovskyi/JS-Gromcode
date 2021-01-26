export const finishList = () => {
  const incr = 1;

  const list = document.querySelector('.list');
  const specListItem = list.querySelector('.special');
  const specText = specListItem.textContent;

  const first = document.createElement('li');
  const last = document.createElement('li');
  const specBefore = document.createElement('li');
  const specAfter = document.createElement('li');

  specBefore.textContent = specText - incr;
  specAfter.textContent = +specText + incr;
  first.textContent = incr;

  specListItem.before(specBefore);
  specListItem.after(specAfter);
  list.prepend(first);

  let listLength = list.querySelectorAll('li').length;
  console.dir(listLength);
  last.textContent = listLength + incr;
  list.append(last);

  return list;
};

// finishList();

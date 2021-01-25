// export
const finishList = () => {
  const incr = 1;

  const listItem = document.createElement('li');
  const list = document.querySelector('.list');
  const specListItem = list.querySelector('.special');
  const specText = specListItem.textContent;
  // const innerTexts = document.querySelectorAll('li').innerText;

  const first = list.prepend(listItem);
  const last = list.append(listItem);
  const specBefore = specListItem.before(listItem);
  const specAfter = specListItem.after(listItem);

  specBefore.textContent = +specText - incr;
  specAfter.textContent = +specText + incr;
  first.textContent = incr;
  last.textContent = +list.length + incr;
};

finishList();

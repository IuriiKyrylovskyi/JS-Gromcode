const listElem = document.querySelector('.repo-list');

export const renderReposList = reposList => {
  const repolistElems = reposList.map(({ name }) => {
    const listElem = document.createElement('li');
    listElem.classList.add('repo-list__item');
    listElem.textContent = name;

    return listElem;
  });

  listElem.append(...repolistElems);
};

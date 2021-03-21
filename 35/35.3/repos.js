const repoListElem = document.querySelector('.repo-list');

export const cleanRepoList = () => {
  repoListElem.innerHTML = '';
};

export const renderReposList = reposList => {
  const repolistElems = reposList.map(({ name }) => {
    const listItemElem = document.createElement('li');
    listItemElem.classList.add('repo-list__item');
    listItemElem.textContent = name;

    return listItemElem;
  });

  cleanRepoList();
  repoListElem.append(...repolistElems);
};

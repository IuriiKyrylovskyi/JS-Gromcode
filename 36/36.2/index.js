import { fetchUserData, fetchRepositories } from './gateways.js';
import { renderUserData } from './user.js';
import { renderReposList, cleanRepoList } from './repos.js';
import { showSpinner, hideSpinner } from './spinner.js';

const showBtnElem = document.querySelector('.name-form__btn');
const inputElem = document.querySelector('.name-form__input');

const defaultUser = {
  avatar_url: 'https://avatars3.githubusercontent.com/u10001',
  name: '',
  location: '',
  repos_url: '',
};

renderUserData(defaultUser);

const onSearchUser = () => {
  showSpinner();
  cleanRepoList();
  const userName = inputElem.value;
  fetchUserData(userName)
    .then(userData => {
      renderUserData(userData);
      return userData.repos_url;
    })
    .then(repoUrl => fetchRepositories(repoUrl))
    .then(reposList => {
      renderReposList(reposList);
    })
    .catch(err => {
      alert(err.message);
    })
    .finally(() => {
      hideSpinner();
    });
};

showBtnElem.addEventListener('click', onSearchUser);

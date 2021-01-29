const searchBtn = document.querySelector('.search__btn');
const searchInp = document.querySelector('.search__input');

const consoleInput = () => {
  console.log(searchInp.value);
};

searchBtn.addEventListener('click', consoleInput);

const userAvatarElem = document.querySelector('.user__avatar');
const userNameElem = document.querySelector('.user__name');
const userLocationElem = document.querySelector('.user__location');

const showBtnElem = document.querySelector('.name-form__btn');
const inputElem = document.querySelector('.name-form__input');

const defaultAvatar = 'https://avatars3.githubusercontent.com/u10001';

userAvatarElem.src = defaultAvatar;

//  `https://api.github.com/users/${inputElem['value']}`;
// IuriiKyrylovskyi

const fetchUserData = userName =>
  fetch(`https://api.github.com/users/${userName}`).then(response => response.json());
// .then(result => console.log(result));

const renderUserData = userData => {
  const { avatar_url, name, location } = userData;
  userAvatarElem.src = avatar_url;
  userNameElem.textContent = name === null ? `${inputElem.value}` : name;
  userLocationElem.textContent = location ? `from ${location}` : '';
};

const onSearchUser = () => {
  const userName = inputElem.value;
  fetchUserData(userName).then(userData => renderUserData(userData));
};

showBtnElem.addEventListener('click', onSearchUser);

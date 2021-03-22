/* eslint-disable camelcase */
const userAvatarElem = document.querySelector('.user__avatar');
const userNameElem = document.querySelector('.user__name');
const userLocationElem = document.querySelector('.user__location');
const inputElem = document.querySelector('.name-form__input');


export const renderUserData = userData => {
  const { avatar_url, name, location } = userData;
  userAvatarElem.src = avatar_url;
  userNameElem.textContent = name === null ? `${inputElem.value}` : name;
  userLocationElem.textContent = location ? `from ${location}` : '';
};

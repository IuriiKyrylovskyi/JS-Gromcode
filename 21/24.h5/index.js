// const btnTxt = 'dont click me';

export const setButton = (arg = 'button text') => {
  const setBtn = document.querySelector('body');
  // setBtn.textContent = `<button>${buttonText}</button>`;
  setBtn.innerHTML = `<button>${arg}</button>`;
  // return setBtn.innerHTML;
};

setButton();

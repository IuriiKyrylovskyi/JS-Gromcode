// const btnTxt = 'dont click me';

export const setButton = buttonText => {
  const setBtn = document.querySelector('body');
  // setBtn.textContent = `<button>${buttonText}</button>`;
  setBtn.innerHTML = `<button>${buttonText}</button>`;
  // return setBtn.innerHTML;
};

// setButton();

export const createButton = buttonText => {
  const body = document.querySelector('body');
  const btn = document.createElement('button');
  body.append(btn);
  btn.innerHTML = buttonText;
  return btn;
};

// const btnText = 'send';

// createButton(btnText);

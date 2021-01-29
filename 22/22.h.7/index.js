const textInput = document.querySelector('.text-input');

const consoleInput = event => {
  console.log(event.target.value);
};

textInput.addEventListener('change', consoleInput);
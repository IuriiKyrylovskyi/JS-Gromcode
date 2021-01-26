const textInput = document.querySelector('.text-input');

const consoleOnChange = () => {
  console.dir(textInput.value);
};

textInput.addEventListener('change', consoleOnChange);

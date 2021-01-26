const textInput = document.querySelector('.text-input');

const consoleOnChange = () => {
  console.log(textInput.value);
};

textInput.addEventListener('change', consoleOnChange);

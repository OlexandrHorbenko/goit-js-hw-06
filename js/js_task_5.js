const textInput = document.querySelector('#name-input');
const textOutput = document.querySelector('#name-output');

const onInputChange = event => {
  switch (event.currentTarget.value.trim()) {
    case '':
    case ' ':
      textOutput.textContent = 'Anonymous';
      break;
    default:
      textOutput.textContent = event.currentTarget.value.trim();
  }
};

textInput.addEventListener('input', onInputChange);
const validationInput = document.querySelector('#validation-input');
const dataLengthValue = Number(validationInput.dataset.length);

const onInputBlur = event => {
  if (event.currentTarget.value.trim().length === dataLengthValue) {
    validationInput.classList.add('valid');
    validationInput.classList.remove('invalid');
  } else if (event.currentTarget.value.trim().length === 0) {
    validationInput.classList.remove('valid');
    validationInput.classList.remove('invalid');
  } else {
    validationInput.classList.add('invalid');
    validationInput.classList.remove('valid');
  }
};

validationInput.addEventListener('blur', onInputBlur);
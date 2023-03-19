const loginForm = document.querySelector('.login-form');

const onBtnClick = event => {
  event.preventDefault();

  const { email, password } = loginForm.elements;

  if (!email.value || !password.value) alert('Всі поля повинні бути заповнені.');

  const user = {
    email: email.value,
    password: password.value,
  };

  console.log(user);
  loginForm.reset();
};

loginForm.addEventListener('submit', onBtnClick);
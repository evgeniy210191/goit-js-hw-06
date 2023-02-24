const form = document.querySelector('.login-form');
form.addEventListener('submit', function (event) {
  event.preventDefault();
  const refs = {
    password: event.currentTarget.elements.password,
    email: event.currentTarget.elements.email,
  };
  if (refs.password.value !== '' && refs.email.value !== '') {
    const elements = refs;
    elements.password = refs.password.value;
    elements.email = refs.email.value;
    console.log(elements);
  } else {
    return alert('всі поля повинні бути заповнені');
  }

  this.reset();
});

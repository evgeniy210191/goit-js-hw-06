const form = document.querySelector('.login-form');
form.onsubmit = function (event) {
  event.preventDefault();
  const refs = {
    password: event.currentTarget.elements.password,
    email: event.currentTarget.elements.email,
  };

  if (refs.password.value !== '' && refs.email.value !== '') {
    const elements = new FormData(event.currentTarget);
    elements.forEach((value, prop) => {
      console.log(prop, value);
      return elements;
    });
  } else {
    return alert('всі поля повинні бути заповнені');
  }

  this.reset();
};

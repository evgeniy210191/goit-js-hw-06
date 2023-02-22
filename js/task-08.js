const form = document.querySelector('.login-form')
console.dir(form);
form.onsubmit = function (event) {
  event.preventDefault()
  for (const input of form.children) {
    if (input.value === '') {
      return alert('Bсі поля повинні бути заповнені')
    }
    this.reset()
  };
};
form.addEventListener('click', ())

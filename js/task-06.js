const input = document.querySelector('[data-length="6"]');
function inputPattern(event) {
  if (input.value === '') {
    return input.removeAttribute('class');
  }
  if (+input.dataset.length === input.value.length) {
    if (!input.hasAttribute('class')) {
      return input.classList.add('valid');
    }
    if (input.classList.contains('invalid')) {
      return input.classList.replace('invalid', 'valid');
    }
  } else {
    if (input.classList.contains('valid')) {
      return input.classList.replace('valid', 'invalid');
    }
    return input.classList.add('invalid');
  }
}

input.addEventListener('blur', inputPattern);

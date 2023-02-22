const [input, text] = ["#name-input", "#name-output"]
  .map(item => document.querySelector(item))
function updateMainText(event) {
  if (input.value === '') {
    return text.innerText = 'Anonymous'
  }
   return text.innerText = input.value
  }
input.addEventListener('input', updateMainText)

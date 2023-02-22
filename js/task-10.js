const [
  reset,
  create,
  containers,
  input
] = ['[data-destroy]', '[data-create]', '#boxes', '[type="number"]']
  .map(item => document.querySelector(item))

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const updataCollor = getRandomHexColor()

function createBoxes(amount) {
  for (let i = 0; i <= amount; i++) {
    return `<div>ffsdfs</div>`
  }
}
create.addEventListener('click', () => {
  console.log(createBoxes(input.value))
})
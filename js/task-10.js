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

function createBoxes(amount) {
  
  for (let i = 0; i <= amount; i++) {
    const updataCollor = getRandomHexColor()
    return `<div style="
      width:calc(30px + 10*${i}px);
      height:calc(30px + 10*${i}px);
      background:${updataCollor};
    "></div>`
  }
}

create.addEventListener('click', () => {
  const createElements = createBoxes(input.value);
  
containers.insertAdjacentHTML('afterbegin', createElements)
})
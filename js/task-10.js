const [
  reset,
  create,
  container,
  input
] = ['[data-destroy]', '[data-create]', '#boxes', '[type="number"]']
  .map(item => document.querySelector(item))

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function createBoxes(amount) {
  const containers = []
  for (let i = 0; i < amount; i++) {
    const updataCollor = getRandomHexColor()
    const divs = document.createElement('div');
    divs.style = `
      width:calc(30px + 10*${i}px);
      height:calc(30px + 10*${i}px);
      margin:10px;
      background:${updataCollor};
    `
    containers.push(divs)    
  }
  return containers
}

create.addEventListener('click', () => {
  const createElements = createBoxes(+input.value);
  console.log(+input.value, createElements);
  
container.append(...createElements)
})

function destroyBoxes(event) {
  container.innerHTML = ''
};

reset.addEventListener('click', destroyBoxes)
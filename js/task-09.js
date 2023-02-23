const [button, text, body] = ['.change-color', '.color', 'body']
  .map(item => document.querySelector(item))

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


function updateColorBody() {
  const color = getRandomHexColor()
  body.style = `background: ${color}`;
  text.innerText = color;
}
button.addEventListener("click", () => { 

  updateColorBody();

});

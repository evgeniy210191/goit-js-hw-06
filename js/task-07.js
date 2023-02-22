const [input, text] = ["#font-size-control", "#text"]
  .map(item => document.querySelector(item))
input.oninput = function (event) {
  text.style = `font-size:${this.valueAsNumber}px`
};

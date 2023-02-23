class Counter {
  constructor({ rootSelector, counterValue = 0, stap = 1 } = {}) {
    this._rootSelector = this.linksElem(rootSelector);
    this.counterValue = counterValue;
    this.stap = stap;
    this.eventsCounter();
  }
  increment() {
    return (this.counterValue += this.stap);
  }
  decrement() {
    return (this.counterValue -= this.stap);
  }
  linksElem(rootSelector) {
    const links = {};
    links.container = document.querySelector(rootSelector);
    links.increment = links.container.querySelector(
      '[data-action="increment"]'
    );
    links.decrement = links.container.querySelector(
      '[data-action="decrement"]'
    );
    links.value = links.container.querySelector('#value');
    return links;
  }
  eventsCounter() {
    this._rootSelector.increment.addEventListener('click', (event) => {
      this.increment();
      this.newCountersValue();
    });
    this._rootSelector.decrement.addEventListener('click', (event) => {
      this.decrement();
      this.newCountersValue();
    });
  }
  newCountersValue() {
    this._rootSelector.value.innerText = this.counterValue;
  }
}
const counter = new Counter({ rootSelector: '#counter' });

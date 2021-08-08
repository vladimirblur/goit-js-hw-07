let counterValue = document.querySelector('#value')
const incrementBtnEl = document.querySelector('button[data-action="increment"]');
const decrementBtnEl = document.querySelector('button[data-action="decrement"]');

const increment = () => {
  counterValue.textContent = Number(counterValue.textContent)  + 1;

};
const decrement = () => {
  counterValue.textContent = Number(counterValue.textContent)  - 1;

};

incrementBtnEl.addEventListener('click', increment);
decrementBtnEl.addEventListener('click', decrement);
console.log(counterValue)


const refs = {
  input: document.querySelector('#name-input'),
  output: document.querySelector('#name-output'),
};
const { input, output } = refs;

const handleShowNameInput = (event) => output.textContent = event.currentTarget.value;

input.addEventListener('input', handleShowNameInput);
const refs = {
  input: document.querySelector('#name-input'),
  output: document.querySelector('#name-output'),
};
const { input, output } = refs;

const handleShowNameInput = (event) => {
  output.textContent = event.currentTarget.value;
  if (event.currentTarget.value === "") {
    output.textContent = "Незнакомец"
  }
};

input.addEventListener('input', handleShowNameInput);
const inputEl = document.querySelector('#validation-input')

const handleValidationInput = ({ currentTarget }) => {
  
  const inputValue = currentTarget.value.length;
  const validationValue = currentTarget.dataset.length;
  
  if (inputValue < Number(validationValue) || inputValue > Number(validationValue)) {
    inputEl.classList.add("invalid")
  }
   if (inputValue === Number(validationValue)) {
    inputEl.classList.add("valid")
  }
  if (inputValue === Number(validationValue) && currentTarget.classList.contains('invalid')) {
    inputEl.classList.replace("invalid", "valid")
  }
 
}
 

inputEl.addEventListener('blur', handleValidationInput);
const inputRangeEl = document.querySelector("#font-size-control")
const textOutputEl = document.querySelector('#text')

inputRangeEl.value = Number.parseInt(window.getComputedStyle(textOutputEl).fontSize)

const handleFontSizeRange = ({ currentTarget }) => {

  textOutputEl.style.fontSize = `${currentTarget.value}px`;
 }

inputRangeEl.addEventListener('input', handleFontSizeRange);
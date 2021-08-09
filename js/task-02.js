const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];


const ingredientItems = ingredients.map((ingredient) => {
  const ingredientItem = document.createElement('li')
  ingredientItem.textContent = ingredient;
  return ingredientItem;
})

const IngridientsListEl = document.querySelector('#ingredients')

IngridientsListEl.append(...ingredientItems);
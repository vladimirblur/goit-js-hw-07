const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingridientItemEl1 = document.createElement('li')
ingridientItemEl1.textContent = ingredients[0];

const ingridientItemEl2 = document.createElement('li')
ingridientItemEl2.textContent = ingredients[1];

const ingridientItemEl3 = document.createElement('li')
ingridientItemEl3.textContent = ingredients[2];

const ingridientItemEl4 = document.createElement('li')
ingridientItemEl4.textContent = ingredients[3];

const ingridientItemEl5 = document.createElement('li')
ingridientItemEl5.textContent = ingredients[4];

const ingridientItemEl6 = document.createElement('li')
ingridientItemEl6.textContent = ingredients[5];

const IngridientsListEl = document.querySelector('#ingredients')

IngridientsListEl.append(ingridientItemEl1, ingridientItemEl2, ingridientItemEl3, ingridientItemEl4, ingridientItemEl5, ingridientItemEl6);
const categoriesEl = document.querySelectorAll('.item')

const getCategories = categories => {
  categories.forEach((el) => {

    console.log("Категория:", el.querySelector('h2').textContent)
    console.log("Количество элементов:", el.querySelector('ul').children.length)
    return
  });
}

getCategories(categoriesEl);
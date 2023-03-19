const categories = document.querySelector('#categories');

console.log('Number of categories:', categories.children.length);

const categoriesArray = Array.from(categories.children);

categoriesArray.forEach(category => {
  console.log(`Category: ${category.querySelector('h2').textContent}`);
  console.log(`Elements: ${category.querySelector('ul').children.length}`);
});
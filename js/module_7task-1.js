// TASK - 1;

const listOfCategories = document.querySelectorAll('.item');
const countOfCategories = listOfCategories.length;

console.log(`Number of categories: ${countOfCategories}`);

listOfCategories.forEach(item => {
  const categoryTitle = item.querySelector('h2').textContent;
  const categoriesCount = item.querySelectorAll('li').length;

  console.log(`Category: ${categoryTitle}`);
  console.log(`Elements: ${categoriesCount}`);
});

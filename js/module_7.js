// TASK - 1;

// const listOfCategories = document.querySelectorAll('.item');
// const countOfCategories = listOfCategories.length;

// console.log(`Number of categories: ${countOfCategories}`);

// listOfCategories.forEach(item => {
//   const categoryTitle = item.querySelector('h2').textContent;
//   const categoriesCount = item.querySelectorAll('li').length;

//   console.log(`Category: ${categoryTitle}`);
//   console.log(`Elements: ${categoriesCount}`);
// });

// TASK - 2;

// const images = [
//   {
//     url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260',
//     alt: 'White and Black Long Fur Cat',
//   },
//   {
//     url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260',
//     alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
//   },
//   {
//     url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260',
//     alt: 'Group of Horses Running',
//   },
//   {
//     url: 'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
//     alt: 'Alpine Spring Meadows',
//   },
//   {
//     url: 'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
//     alt: 'Nature Landscape',
//   },
//   {
//     url: 'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
//     alt: 'Lighthouse Coast Sea',
//   },
// ];

// const galleryList = document.querySelector('.gallery');

// const galleryMarkup = images
//   .map(({ url, alt }) => `<li><img src="${url}" alt="${alt}" width=800></li>`)
//   .join('');

// galleryList.insertAdjacentHTML('beforeend', galleryMarkup);

// TASK-3

// const userNameInput = document.querySelector('input');

// userNameInput.addEventListener('input', handleInput);

// function handleInput(event) {
//   const inputValue = event.currentTarget.value.trim();
//   const spanText = document.querySelector('#name-output');
//   if (inputValue === '' || inputValue === false) {
//     return `${spanText.textContent}`;
//   }
//   return `${(spanText.textContent = inputValue)}`;
// }

// TASK-4;

// const form = document.querySelector('.login-form');

// form.addEventListener('submit', handleSubmit);

// function handleSubmit(event) {
//   event.preventDefault();

//   const elements = event.currentTarget;
//   const emailValue = elements.email.value;
//   const passwordValue = elements.password.value;

//   const objInfo = {
//     email: emailValue,
//     password: passwordValue,
//   };

//   console.log(objInfo);

//   if (!emailValue || !passwordValue) {
//     alert('All form fields must be filled in');
//     return;
//   }

//   form.reset();
// }

// TASK-5;

// const background = document.querySelector('body');
// const changeColor = document.querySelector('button.change-color');
// const ourColor = document.querySelector('span.color');

// changeColor.addEventListener('click', handleClick);

// function handleClick() {
//   const random = getRandomHexColor();
//   background.style.backgroundColor = random;
//   ourColor.textContent = random;
// }

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }

// TASK-6;

// const input = document.querySelector('input');
// const createBtn = document.querySelector('[data-create]');
// const destroyBtn = document.querySelector('[data-destroy]');

// const boxContainer = document.querySelector('#boxes');

// createBtn.addEventListener('click', handleCreate);
// destroyBtn.addEventListener('click', handleDestroy);

// function handleCreate() {
//   const amount = Number(input.value);
//   if (amount < 1 || amount > 100) {
//     return alert('Please enter a number between 1 and 100!!!');
//   }
//   createBoxes(amount);
//   input.value = '';
// }

// function createBoxes(amount) {
//   handleDestroy();
//   let size = 30;

//   for (let i = 0; i < amount; i += 1) {
//     const box = document.createElement('div');
//     box.style.width = `${size}px`;
//     box.style.height = `${size}px`;
//     box.style.backgroundColor = getRandomHexColor();
//     boxContainer.append(box);
//     size += 10;
//   }
// }

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }

// function handleDestroy() {
//   boxContainer.innerHTML = '';
// }

const background = document.querySelector('body');
const changeColor = document.querySelector('button.change-color');
const ourColor = document.querySelector('span.color');

changeColor.addEventListener('click', handleClick);

function handleClick() {
  const random = getRandomHexColor();
  background.style.backgroundColor = random;
  ourColor.textContent = random;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

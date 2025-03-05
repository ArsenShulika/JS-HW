const userNameInput = document.querySelector('input');

userNameInput.addEventListener('input', handleInput);

function handleInput(event) {
  const inputValue = event.currentTarget.value.trim();
  const spanText = document.querySelector('#name-output');
  if (inputValue === '' || inputValue === false) {
    return `${spanText.textContent}`;
  }
  return `${(spanText.textContent = inputValue)}`;
}

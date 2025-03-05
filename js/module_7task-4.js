const form = document.querySelector('.login-form');

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const elements = event.currentTarget;
  const emailValue = elements.email.value;
  const passwordValue = elements.password.value;

  const objInfo = {
    email: emailValue,
    password: passwordValue,
  };

  console.log(objInfo);

  if (!emailValue || !passwordValue) {
    alert('All form fields must be filled in');
    return;
  }

  form.reset();
}

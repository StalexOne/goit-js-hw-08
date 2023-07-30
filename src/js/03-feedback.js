import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');

form.addEventListener('input', throttle(onFormInput, 500));
const formData = localStorage.getItem('feedback-form-state')
  ? JSON.parse(localStorage.getItem('feedback-form-state'))
  : {};

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();
  const keyParsed = JSON.parse(localStorage.getItem('feedback-form-state'));
  const email = e.currentTarget.elements.email.value;
  const message = e.currentTarget.elements.message.value;
  if (email === '' || message === '') {
    return alert('Заповни інфо');
  }
  console.log(keyParsed);
  e.currentTarget.reset();
  localStorage.removeItem('feedback-form-state');
}

function onFormInput({ target }) {
  formData[target.name] = target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function setFormValues() {
  const savedInfo = localStorage.getItem('feedback-form-state');
  console.log(savedInfo);
  if (savedInfo) {
    const data = JSON.parse(savedInfo);
    if (data.email) {
      form.elements.email.value = data.email;
    }
    if (data.message) {
      form.elements.message.value = data.message;
    }
  }
}
setFormValues();

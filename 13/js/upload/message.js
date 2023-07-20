import { isEscapeKey } from '../utils/util.js';

const errorMessageTemplate = document.querySelector('#error').content.querySelector('.error');
const successMessageTemplate = document.querySelector('#success').content.querySelector('.success');
let errorMessageClone;
let successMessageClone;

const closeErrorMessage = () => {
  errorMessageClone.remove();
  document.removeEventListener('keydown', onDocumentKeydown);
  errorMessageClone = '';
};

const closeSuccessMessage = () => {
  successMessageClone.remove();
  document.removeEventListener('keydown', onDocumentKeydown);
  successMessageClone = '';
};

function onDocumentKeydown(event) {
  if (isEscapeKey(event)) {
    event.preventDefault();
    if (errorMessageClone) {
      closeErrorMessage();
      return;
    }
    closeSuccessMessage();
  }
}

const onErrorMessageButtonClick = (event) => {
  event.preventDefault();
  closeErrorMessage();
};

const onSuccessMessageButtonClick = (event) => {
  event.preventDefault();
  closeSuccessMessage();
};

const onErrorMessageClick = (event) => {
  if (!event.target.closest('.error__inner')) {
    closeErrorMessage();
  }
};

const onSuccessMessageClick = (event) => {
  if (!event.target.closest('.success__inner')) {
    closeSuccessMessage();
  }
};

const showErrorMessage = () => {
  errorMessageClone = errorMessageTemplate.cloneNode(true);
  document.body.append(errorMessageClone);
  document.addEventListener('keydown', onDocumentKeydown);
  errorMessageClone.querySelector('.error__button').addEventListener('click', onErrorMessageButtonClick);
  errorMessageClone.addEventListener('click', onErrorMessageClick);
};

const showSuccessMessage = () => {
  successMessageClone = successMessageTemplate.cloneNode(true);
  document.body.append(successMessageClone);
  document.addEventListener('keydown', onDocumentKeydown);
  successMessageClone.querySelector('.success__button').addEventListener('click', onSuccessMessageButtonClick);
  successMessageClone.addEventListener('click', onSuccessMessageClick);
};

export { showSuccessMessage, showErrorMessage };

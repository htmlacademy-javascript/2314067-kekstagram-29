import { isEscapeKey } from './util.js';

const errorMessageTemplate = document.querySelector('#error').content.querySelector('.error');
const successMessageTemplate = document.querySelector('#success').content.querySelector('.success');
let errorMessageClone;
let successMessageClone;

const closeErrorMessage = () => {
  errorMessageClone.remove();
  document.removeEventListener('keydown', onDocumentKeydown);
};

const closeSuccessMessage = () => {
  successMessageClone.remove();
  document.removeEventListener('keydown', onDocumentKeydown);
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

const showErrorMessage = () => {
  errorMessageClone = errorMessageTemplate.cloneNode(true);
  document.body.append(errorMessageClone);
  document.addEventListener('keydown', onDocumentKeydown);
  errorMessageClone.querySelector('.error__button').addEventListener('click', onErrorMessageButtonClick);
};

const showSuccessMessage = () => {
  successMessageClone = successMessageTemplate.cloneNode(true);
  document.body.append(successMessageClone);
  document.addEventListener('keydown', onDocumentKeydown);
  successMessageClone.querySelector('.success__button').addEventListener('click', onSuccessMessageButtonClick);
};

export { showSuccessMessage, showErrorMessage };

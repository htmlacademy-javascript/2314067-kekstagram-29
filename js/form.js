import { isEscapeKey } from './util.js';
import { changeEffect, resetFilter, createSlider } from './effects.js';
import { addValidator, resetPristine, validatePristine } from './validate.js';
import { activateScale, resetScale } from './scaling.js';
import { showSuccessMessage, showErrorMessage } from './message.js';
import { sendData } from './api.js';

const form = document.querySelector('.img-upload__form');
const overlay = document.querySelector('.img-upload__overlay');
const buttonCancel = document.querySelector('#upload-cancel');
const fileField = document.querySelector('#upload-file');
const effectsField = document.querySelector('.effects');

const onSendSuccessMessage = () => {
  showSuccessMessage();
  closeForm();
};

const onSendErrorMessage = () => {
  showErrorMessage();
};

const onDocumentKeydown = (event) => {
  if (isEscapeKey(event) && !event.target.closest('.text__hashtags') &&
    !event.target.closest('.text__description')) {
    event.preventDefault();
    closeForm();
  }
};

const openForm = () => {
  overlay.classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
};

const onButtonCancelClick = () => closeForm();
const onFileInputChange = () => openForm();
const onEffectsChange = (event) => changeEffect(event);

const onFormSubmit = (event) => {
  event.preventDefault();
  if (validatePristine()) {
    sendData(sendData, onSendSuccessMessage, onSendErrorMessage, new FormData(event.target));
  }
};

function closeForm() {
  form.reset();
  resetFilter(effectsField.querySelector('input:checked').value);
  resetPristine();
  resetScale();
  overlay.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
}

const setFormAction = () => {
  fileField.addEventListener('change', onFileInputChange);
  buttonCancel.addEventListener('click', onButtonCancelClick);
  effectsField.addEventListener('change', onEffectsChange);
  form.addEventListener('submit', onFormSubmit);
  addValidator();
  createSlider(effectsField.querySelector('input:checked').value);
  activateScale();
};

export { setFormAction };

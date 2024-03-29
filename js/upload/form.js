import { isEscapeKey } from '../utils/util.js';
import { changeEffect, resetFilter, createSlider } from './effects.js';
import { addValidator, resetPristine, validatePristine } from './validate.js';
import { activateScale, resetScale } from './scaling.js';
import { sendData } from '../utils/api.js';
import { showSuccessMessage, showErrorMessage } from './message.js';
import { loadImages } from './load-images.js';

const SEND_URL = 'https://29.javascript.pages.academy/kekstagram';
const form = document.querySelector('.img-upload__form');
const overlay = document.querySelector('.img-upload__overlay');
const buttonCancel = document.querySelector('#upload-cancel');
const fileField = document.querySelector('#upload-file');
const effectsField = document.querySelector('.effects');
const imagesUploadSubmit = document.querySelector('.img-upload__submit');
const currentEffect = effectsField.querySelector('input:checked').value;

const setImagesUploadSubmitState = (state) => {
  imagesUploadSubmit.disabled = state;
};

const sendSuccessMessageCallback = () => {
  showSuccessMessage();
  closeForm();
  setImagesUploadSubmitState(false);
};

const SendErrorMessageCallback = () => {
  showErrorMessage();
  setImagesUploadSubmitState(false);
};

const onDocumentKeydown = (event) => {
  if (isEscapeKey(event) && !event.target.closest('.text__hashtags') &&
    !event.target.closest('.text__description') && !document.querySelector('.error')) {
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

const onFileInputChange = (event) => {
  openForm();
  loadImages(event);
};

const onEffectsChange = (event) => changeEffect(event);

const onFormSubmit = (event) => {
  event.preventDefault();
  if (validatePristine()) {
    setImagesUploadSubmitState(true);
    sendData(SEND_URL, sendSuccessMessageCallback, SendErrorMessageCallback, new FormData(event.target));
  }
};

function closeForm() {
  form.reset();
  resetFilter(currentEffect);
  resetPristine();
  resetScale();
  overlay.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
}

const initFormAction = () => {
  fileField.addEventListener('change', onFileInputChange);
  buttonCancel.addEventListener('click', onButtonCancelClick);
  effectsField.addEventListener('change', onEffectsChange);
  form.addEventListener('submit', onFormSubmit);
  addValidator();
  createSlider(currentEffect);
  activateScale();
};

export { initFormAction };

import {changeEffect, resetFilter, createSlider} from './effects.js';
import { addValidator, resetPristine, validatePristine } from './validate.js';

const form = document.querySelector('.img-upload__form');
const overlay = document.querySelector('.img-upload__overlay');
const cancelButton = document.querySelector('#upload-cancel');
const fileField = document.querySelector('#upload-file');
const effectsField = document.querySelector('.effects');

const onDocumentKeydown = (evt) => {
  if(evt.key === 'Escape' && !evt.target.closest('.text__hashtags') &&
  !evt.target.closest('.text__description')) {
    evt.preventDefault();
    closeModalLoad();
  }
};

const openModalLoad = () => {
  overlay.classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
};

const onCancelButtonclick = () => closeModalLoad();
const onFileInputChange = () => openModalLoad();
const onEffectsFieldChange = (evt) => changeEffect(evt);

const onFormSubmit = (evt) => {
  if (!validatePristine()) {
    evt.preventDefault();
  }
};

function closeModalLoad() {
  form.reset();
  resetFilter();
  resetPristine();
  overlay.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
}

const addFormAction = () => {
  fileField.addEventListener('change', onFileInputChange);
  cancelButton.addEventListener('click', onCancelButtonclick);
  effectsField.addEventListener('change', onEffectsFieldChange);
  form.addEventListener('submit', onFormSubmit);
  addValidator();
  createSlider();
};

export {addFormAction};

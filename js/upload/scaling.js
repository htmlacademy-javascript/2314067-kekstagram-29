const STEP_SCALE = 25;
const PERCENT_DIVIDER = 100;
const MIN_SCALE = '25%';
const MAX_SCALE = '100%';

const previewImage = document.querySelector('.img-upload__preview img');
const scaleUpButton = document.querySelector('.scale__control--bigger');
const scaleDownButton = document.querySelector('.scale__control--smaller');
const scaleInput = document.querySelector('.scale__control--value');


const changeScale = (value) => {
  previewImage.style.transform = `scale(${+value.replace('%', '') / PERCENT_DIVIDER})`;
};

const onSmallerButtonClick = () => {
  if (scaleInput.value !== MIN_SCALE) {
    scaleInput.value = `${+scaleInput.value.replace('%', '') - STEP_SCALE}%`;
    changeScale(scaleInput.value);
  }
};

const onBiggerButtonClick = () => {
  if (scaleInput.value !== MAX_SCALE) {
    scaleInput.value = `${+scaleInput.value.replace('%', '') + STEP_SCALE}%`;
    changeScale(scaleInput.value);
  }
};

const activateScale = () => {
  scaleUpButton.addEventListener('click', onBiggerButtonClick);
  scaleDownButton.addEventListener('click', onSmallerButtonClick);
};

const resetScale = () => changeScale(scaleInput.value);

export { activateScale, resetScale };

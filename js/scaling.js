const STEP_SCALE = 25;
const END_SCALE = 100;
const MIN_SCALE = '25%';
const MAX_SCALE = '100%';

const previewImage = document.querySelector('.img-upload__preview img');
const scaleUpButton = document.querySelector('.scale__control--bigger');
const scaleDownButton = document.querySelector('.scale__control--smaller');
const scaleInput = document.querySelector('.scale__control--value');


const changeScale = (value) => {
  previewImage.style.transform = `scale(${+value.replace('%', '') / END_SCALE})`;
};

const onSmallerButtonclick = () => {
  if (scaleInput.value !== MIN_SCALE) {
    scaleInput.value = `${+scaleInput.value.replace('%', '') - STEP_SCALE}%`;
    changeScale(scaleInput.value);
  }
};

const onBiggerButtonclick = () => {
  if (scaleInput.value !== MAX_SCALE) {
    scaleInput.value = `${+scaleInput.value.replace('%', '') + STEP_SCALE}%`;
    changeScale(scaleInput.value);
  }
};

const activateScale = () => {
  scaleUpButton.addEventListener('click', onBiggerButtonclick);
  scaleDownButton.addEventListener('click', onSmallerButtonclick);
};

const resetScale = () => changeScale(scaleInput.value);

export { activateScale, resetScale };

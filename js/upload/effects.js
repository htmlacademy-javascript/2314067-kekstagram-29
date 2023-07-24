const RANGE_OPTIONS = {
  chrome: {
    effect: 'grayscale',
    min: 0,
    max: 1,
    step: 0.1,
    unit: '',
  },
  sepia: {
    effect: 'sepia',
    min: 0,
    max: 1,
    step: 0.1,
    unit: '',
  },
  marvin: {
    effect: 'invert',
    min: 0,
    max: 100,
    step: 1,
    unit: '%',
  },
  phobos: {
    effect: 'blur',
    min: 0,
    max: 3,
    step: 0.1,
    unit: 'px',
  },
  heat: {
    effect: 'brightness',
    min: 1,
    max: 3,
    step: 0.1,
    unit: '',
  },
  default: {
    min: 0,
    max: 100,
    step: 1,
  }
};

const imagePreview = document.querySelector('.img-upload__preview img');
const sliderField = document.querySelector('.img-upload__effect-level');
const effectLevel = document.querySelector('.effect-level__value');
const rangeEffect = document.querySelector('.effect-level__slider');

const setSliderState = (value) => {
  if (value === 'none') {
    sliderField.classList.add('hidden');
    return;
  }
  sliderField.classList.remove('hidden');
};

const createSlider = (value) => {
  setSliderState(value);
  const settings = RANGE_OPTIONS[value] || RANGE_OPTIONS.default;
  noUiSlider.create(rangeEffect, {
    range: {
      min: settings.min,
      max: settings.max,
    },
    start: settings.max,
    step: settings.step,
    connect: 'lower',
  });
};

const resetFilter = (value) => {
  imagePreview.style.filter = null;
  setSliderState(value);
  rangeEffect.classList.add('hidden');
};

const changeEffect = ({ target }) => {
  if (target.value === 'none') {
    resetFilter();
    setSliderState(target.value);
    return;
  }

  setSliderState(target.value);

  rangeEffect.classList.remove('hidden');

  const { effect, min, max, step, unit } = RANGE_OPTIONS[target.value];

  rangeEffect.noUiSlider.updateOptions({
    range: {
      min,
      max,
    },
    start: max,
    step,
    connect: 'lower',
  });

  rangeEffect.noUiSlider.off('update');

  rangeEffect.noUiSlider.on('update', () => {
    effectLevel.value = rangeEffect.noUiSlider.get();
    imagePreview.style.filter = `${effect}(${effectLevel.value}${unit})`;
  });
};

export { changeEffect, resetFilter, createSlider };

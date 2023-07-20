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

const imageElement = document.querySelector('.img-upload__preview img');
const sliderField = document.querySelector('.img-upload__effect-level');
const effectLevel = document.querySelector('.effect-level__value');
const rangeElement = document.querySelector('.effect-level__slider');

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
  noUiSlider.create(rangeElement, {
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
  imageElement.style.filter = null;
  setSliderState(value);
  rangeElement.classList.add('hidden');
};

const changeEffect = ({ target }) => {
  if (target.value === 'none') {
    resetFilter();
    setSliderState(target.value);
    return;
  }

  setSliderState(target.value);

  rangeElement.classList.remove('hidden');

  const { effect, min, max, step, unit } = RANGE_OPTIONS[target.value];

  rangeElement.noUiSlider.updateOptions({
    range: {
      min,
      max,
    },
    start: max,
    step,
    connect: 'lower',
  });

  rangeElement.noUiSlider.off('update');

  rangeElement.noUiSlider.on('update', () => {
    effectLevel.value = rangeElement.noUiSlider.get();
    imageElement.style.filter = `${effect}(${effectLevel.value}${unit})`;
  });
};

export { changeEffect, resetFilter, createSlider };

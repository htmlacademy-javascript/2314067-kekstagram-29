const ALERT_SHOW_TIME = 5000;
const ERROR_MESSAGE = 'Ошибка загрузки. Попробовать ещё раз.';
const DELAY_TIME = 500;

const showErrorMessage = () => {
  const errorContainer = document.createElement('div');
  errorContainer.classList.add('show-error-message');
  errorContainer.textContent = ERROR_MESSAGE;
  document.body.append(errorContainer);

  setTimeout(() => {
    errorContainer.remove();
  }, ALERT_SHOW_TIME);
};

const debounce = (callback, timeoutDelay = DELAY_TIME) => {
  let timeoutId;
  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
};

const shuffleArray = (elements) => {
  for (let i = elements.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = elements[i];
    elements[i] = elements[j];
    elements[j] = temp;
  }
  return elements;
};

const getRandomId = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

const getRandomArrayElement = (elements) => elements[getRandomId(0, elements.length - 1)];

const isEscapeKey = (event) => event.key === 'Escape';

export { showErrorMessage, getRandomArrayElement, getRandomId, isEscapeKey, shuffleArray, debounce };

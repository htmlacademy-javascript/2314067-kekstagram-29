const ALERT_SHOW_TIME = 5000;
const ERROR_MESSAGE = 'Ошибка загрузки. Попробовать ещё раз.';

const showErrorMessage = () => {
  const errorContainer = document.createElement('div');
  errorContainer.classList.add('show-error-message');
  errorContainer.textContent = ERROR_MESSAGE;
  document.body.append(errorContainer);

  setTimeout(() => {
    errorContainer.remove();
  }, ALERT_SHOW_TIME);
};

const getRandomId = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

const getRandomArrayElement = (elements) => elements[getRandomId(0, elements.length - 1)];

const isEscapeKey = (event) => event.key === 'Escape';

export { showErrorMessage, getRandomArrayElement, getRandomId, isEscapeKey };

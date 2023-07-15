const ALERT_SHOW_TIME = 5000;

const showErrorMessage = (message) => {
  const errorContainer = document.createElement('div');
  errorContainer.classList.add('show-error-message');
  errorContainer.style.zIndex = '100';
  errorContainer.style.position = 'absolute';
  errorContainer.style.left = '0';
  errorContainer.style.top = '0';
  errorContainer.style.right = '0';
  errorContainer.style.padding = '10px 3px';
  errorContainer.style.lineHeight = 'normal';
  errorContainer.style.opacity = '0.8';
  errorContainer.style.fontSize = '30px';
  errorContainer.style.textAlign = 'center';
  errorContainer.style.backgroundColor = 'red';
  errorContainer.textContent = message;
  document.body.append(errorContainer);

  setTimeout(() => {
    errorContainer.remove();
  }, ALERT_SHOW_TIME);
};

const getRandomId = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

const getRandomArrayElement = (elements) => elements[getRandomId(0, elements.length - 1)];

const isEscapeKey = (event) => event.key === 'Escape';

export { showErrorMessage, getRandomArrayElement, getRandomId, isEscapeKey };

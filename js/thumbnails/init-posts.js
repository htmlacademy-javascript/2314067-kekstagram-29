import { getData } from '../utils/api.js';
import { initFilter } from './filters.js';
import { renderPosts } from './create-posts.js';

const GET_URL = 'https://29.javascript.pages.academy/kekstagram/data';
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

const getSuccess = (data) => {
  renderPosts(data);
  initFilter(data);
};

const initPostsData = () => getData(GET_URL, getSuccess, showErrorMessage);

export { initPostsData };

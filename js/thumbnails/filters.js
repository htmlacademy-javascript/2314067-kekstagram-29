import { initPosts } from './init-posts.js';
import { shuffleArray, debounce } from '../utils/util.js';

const FILTER_RANDOM = 'filter-random';
const FILTER_DISCUSSED = 'filter-discussed';
const RANDOM_POSTS_COUNT = 10;
const RENDER_DELAY = 500;

const filter = document.querySelector('.img-filters');
const imagesFiltersForm = document.querySelector('.img-filters__form');
const pictureList = document.querySelector('.pictures');

const getFilteringData = (data, id = '') => {
  switch (id) {
    case FILTER_RANDOM:
      return shuffleArray(data.slice()).slice(0, RANDOM_POSTS_COUNT);

    case FILTER_DISCUSSED:
      return data.slice().sort((a, b) => b.comments.length - a.comments.length);

    default:
      return data;
  }
};

const removePictures = () => {
  pictureList.querySelectorAll('.picture').forEach((picture) => picture.remove());
};

const setTimeout = debounce((data, id) => {
  removePictures();
  initPosts(getFilteringData(data, id));
}, RENDER_DELAY);

const initFilter = (data) => {
  filter.classList.remove('img-filters--inactive');
  imagesFiltersForm.addEventListener('click', (event) => {
    event.preventDefault();

    if (event.target.closest('.img-filters__button') && !event.target.closest('img-filters__button--active')) {
      imagesFiltersForm.querySelector('.img-filters__button--active').classList.remove('img-filters__button--active');
      event.target.classList.add('img-filters__button--active');
      const id = event.target.id;
      setTimeout(data, id);
    }
  });
};

export { initFilter };

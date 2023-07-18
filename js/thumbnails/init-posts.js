import { getData } from '../utils/api.js';
import { showErrorMessage } from '../utils/util.js';
import { initFilter } from './filters.js';
import { createPost } from './create-posts.js';

const GET_URL = 'https://29.javascript.pages.academy/kekstagram/data';

const galleryList = document.querySelector('.pictures');

const initPosts = (data) => {
  data.forEach((item) => galleryList.append(createPost(item)));
};

const getSuccess = (data) => {
  initPosts(data);
  initFilter(data);
};

const initPostsData = () => getData(GET_URL, getSuccess, showErrorMessage);

export { initPostsData, initPosts };

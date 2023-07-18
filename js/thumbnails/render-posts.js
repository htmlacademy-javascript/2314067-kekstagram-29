import { showErrorMessage } from '../utils/util.js';
import { renderModal } from './modal.js';
import { getData } from '../utils/api.js';

const GET_URL = 'https://29.javascript.pages.academy/kekstagram/data';
const galleryList = document.querySelector('.pictures');
const galleryTemplate = document.querySelector('#picture').content.querySelector('.picture');
const galleryFragment = document.createDocumentFragment();

const createPost = (data) => {
  const postElement = galleryTemplate.cloneNode(true);
  const images = postElement.querySelector('.picture__img');
  images.src = data.url;
  images.alt = data.description;
  postElement.querySelector('.picture__likes').textContent = data.likes;
  postElement.querySelector('.picture__comments').textContent = data.comments.length;
  galleryFragment.append(postElement);

  postElement.addEventListener('click', (event) => {
    event.preventDefault();
    renderModal(data);
  });
  return postElement;
};

const renderPosts = (data) => {
  data.forEach((item) => galleryList.append(createPost(item)));
};

const getSuccess = (data) => {
  renderPosts(data);
};

const getRenderPostsData = () => getData(GET_URL, getSuccess, showErrorMessage);

export { getRenderPostsData };

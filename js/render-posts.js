import { showErrorMessage } from './util.js';
import { renderModal } from './modal.js';
import { getData } from './api.js';

const GET_URL = 'https://29.javascript.pages.academy/kekstagram/data';
const galleryList = document.querySelector('.pictures');
const galleryTemplate = document.querySelector('#picture').content.querySelector('.picture');
const galleryFragment = document.createDocumentFragment();

const createPost = (dataPictures) => {
  const postElement = galleryTemplate.cloneNode(true);
  const images = postElement.querySelector('.picture__img');
  images.src = dataPictures.url;
  images.alt = dataPictures.description;
  postElement.querySelector('.picture__likes').textContent = dataPictures.likes;
  postElement.querySelector('.picture__comments').textContent = dataPictures.comments.length;
  galleryFragment.append(postElement);

  postElement.addEventListener('click', (event) => {
    event.preventDefault();
    renderModal(dataPictures);
  });
  return postElement;
};

const renderPosts = (dataPictures) => {
  dataPictures.forEach((item) => galleryList.append(createPost(item)));
};

const getSuccess = (dataPictures) => renderPosts(dataPictures);

const getRenderPostsData = () => getData(GET_URL, getSuccess, showErrorMessage);

export { getRenderPostsData };

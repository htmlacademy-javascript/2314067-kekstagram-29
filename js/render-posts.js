import { createPosts } from './data.js';

// Отображение фотографий
const galleryList = document.querySelector('.pictures');
const galleryTemplate = document.querySelector('#picture').content.querySelector('.picture');
const galleryFragment = document.createDocumentFragment();
const galleryData = createPosts();

// Отрисовка фотографий в миниатюре
const createPost = (dataPictures) => {
  const postElement = galleryTemplate.cloneNode(true);
  const images = postElement.querySelector('.picture__img');
  images.src = dataPictures.url;
  images.alt = dataPictures.description;
  postElement.querySelector('.picture__likes').textContent = dataPictures.likes;
  postElement.querySelector('.picture__comments').textContent = dataPictures.comments.length;
  galleryFragment.append(postElement);
};

const renderPosts = () => {
  galleryData.forEach((item) => createPost(item));
  galleryList.append(galleryFragment);
};

export { renderPosts };

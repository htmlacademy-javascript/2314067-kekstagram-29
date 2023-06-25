import { createPosts } from './data.js';

// Отображение фотографий
const galleryList = document.querySelector('.pictures');
const galleryTemplate = document.querySelector('#picture').content.querySelector('.picture');

// Отрисовка фотографий в миниатюре
// const renderPosts = (dataPictures) => {
//   const listFragment = document.createDocumentFragment();

//   dataPictures.forEach(({ url, description, likes, comments, id }) => {
//     const templateElement = galleryTemplate.cloneNode(true);
//     templateElement.querySelector('.picture__img').src = url;
//     templateElement.querySelector('.picture__img').alt = description;
//     templateElement.querySelector('.picture__likes').textContent = likes;
//     templateElement.querySelector('.picture__comments').textContent = comments.length;
//     templateElement.dataset.thumbnailId = id;

//     listFragment.append(templateElement);
//   });

//   galleryList.append(listFragment);
// };

const galleryData = createPosts();
const createPost = (dataPictures) => {
  const postElement = galleryTemplate.cloneNode(true);
  postElement.querySelector('.picture__img').src = dataPictures.url;
  postElement.querySelector('.picture__img').alt = dataPictures.description;
  postElement.querySelector('.picture__likes').textContent = dataPictures.likes;
  postElement.querySelector('.picture__comments').textContent = dataPictures.comments.length;
  return postElement;
};

const renderPosts = () => {
  galleryData.forEach((item) => galleryList.append(createPost(item)));
};

export { renderPosts };

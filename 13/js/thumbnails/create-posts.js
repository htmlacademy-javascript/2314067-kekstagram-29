import { renderModal } from './modal.js';

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

export { createPost };

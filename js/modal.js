import './render-posts.js';

const bigPicture = document.querySelector('.big-picture');
const bigPictureClose = document.querySelector('.big-picture__cancel');
const bigPictureImg = document.querySelector('.big-picture__img img');
const modalLikesCounter = document.querySelector('.likes-count');
const modalCommentsCounter = document.querySelector('.social__comment-count');
const modalCommentsList = document.querySelector('.social__comments');
const modalCaption = document.querySelector('.social__caption');
const modalCommentsLoader = document.querySelector('.comments-loader');
const commentList = document.querySelector('.social__comment');
const COMMENTS_COUNTER = 5;

let showingComments = 0;
let comments = [];

const modalEscKeydown = (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    closeModal();
  }
};

const buttonModalCloseClick = (evt) => {
  evt.preventDefault();
  closeModal();
};

const fillCommentCounter = () => {
  modalCommentsCounter.innerHTML = `${showingComments} из <span class="comments-count"> ${comments.length}</span> комментариев`;
};

const createComment = (comment) => {
  const newComment = commentList.cloneNode(true);
  const img = newComment.querySelector('img');
  img.src = comment.avatar;
  img.alt = comment.message;
  newComment.querySelector('p').textContent = comment.message;
  return newComment;
};

const renderComments = () => {
  const currentComments = comments.slice(showingComments, showingComments + COMMENTS_COUNTER);
  showingComments += COMMENTS_COUNTER;
  showingComments = Math.min(showingComments, comments.length);
  currentComments.forEach((item) => modalCommentsList.append(createComment(item)));
  fillCommentCounter();

  if (showingComments >= comments.length) {
    modalCommentsLoader.classList.add('hidden');
    return;
  }
  modalCommentsLoader.classList.remove('hidden');
};

const modalPicture = (dataPost) => {
  bigPictureImg.src = dataPost.url;
  modalLikesCounter.textContent = dataPost.likes;
  modalCaption.textContent = dataPost.description;
};

// Функция закрытия модального окна
const closeModal = () => {
  document.body.classList.remove('modal-open');
  bigPicture.classList.add('hidden');
  document.addEventListener('keydown', modalEscKeydown);
  bigPictureClose.removeEventListener('click', buttonModalCloseClick);

  comments = [];
  showingComments = 0;
};

const commentsLoadClick = (evt) => {
  evt.preventDefault();
  renderComments();
};

// Функция открытия модального окна
const openModal = (dataPost) => {
  comments = dataPost.comments;
  modalCommentsList.innerHTML = '';
  document.body.classList.add('modal-open');
  bigPicture.classList.remove('hidden');
  modalPicture(dataPost);
  renderComments();
  document.addEventListener('keydown', modalEscKeydown);
  bigPictureClose.addEventListener('click', buttonModalCloseClick);
  modalCommentsLoader.addEventListener('click', commentsLoadClick);
};

export { openModal };

import { isEscapeKey } from '../utils/util.js';

const COMMENTS_COUNTER = 5;

const bigPicture = document.querySelector('.big-picture');
const bigPictureClose = document.querySelector('.big-picture__cancel');
const bigPictureImg = document.querySelector('.big-picture__img img');
const modalLikesCounter = document.querySelector('.likes-count');
const modalCommentsCounter = document.querySelector('.social__comment-count');
const modalCommentsList = document.querySelector('.social__comments');
const modalCaption = document.querySelector('.social__caption');
const modalCommentsLoader = document.querySelector('.comments-loader');
const commentList = document.querySelector('.social__comment');

let showingComments = 0;
let comments = [];

const fillCommentCounter = () => {
  modalCommentsCounter.innerHTML = `${showingComments} из <span class="comments-count">${comments.length}</span> комментариев`;
};

const createComment = (comment) => {
  const newComment = commentList.cloneNode(true);
  const img = newComment.querySelector('.social__picture');
  img.src = comment.avatar;
  img.alt = comment.name;
  newComment.querySelector('.social__text').textContent = comment.message;
  return newComment;
};

const setButtonState = () => {
  if (showingComments >= comments.length) {
    modalCommentsLoader.classList.add('hidden');
    return;
  }
  modalCommentsLoader.classList.remove('hidden');
};

const renderComments = () => {
  const currentComments = comments.slice(showingComments, showingComments + COMMENTS_COUNTER);
  showingComments = Math.min(showingComments + COMMENTS_COUNTER, comments.length);
  currentComments.forEach((item) => modalCommentsList.append(createComment(item)));
  fillCommentCounter();
  setButtonState();
};

const fillPicture = (post) => {
  bigPictureImg.src = post.url;
  modalLikesCounter.textContent = post.likes;
  modalCaption.textContent = post.description;
};

const closeModal = () => {
  document.body.classList.remove('modal-open');
  bigPicture.classList.add('hidden');
  document.removeEventListener('keydown', modalEscKeydownHandler);
  bigPictureClose.removeEventListener('click', buttonModalCloseClickHandler);
  showingComments = 0;
};

const commentsLoadClickHandler = (event) => {
  event.preventDefault();
  renderComments();
};

function modalEscKeydownHandler(event) {
  if (isEscapeKey(event) && !event.target.closest('.social__footer-text')) {
    event.preventDefault();
    closeModal();
  }
}

function buttonModalCloseClickHandler(event) {
  event.preventDefault();
  closeModal();
}

const openModal = () => {
  document.body.classList.add('modal-open');
  bigPicture.classList.remove('hidden');
  document.addEventListener('keydown', modalEscKeydownHandler);
  bigPictureClose.addEventListener('click', buttonModalCloseClickHandler);
  modalCommentsLoader.addEventListener('click', commentsLoadClickHandler);
};

const renderModal = (post) => {
  comments = post.comments;
  modalCommentsList.innerHTML = '';
  openModal();
  fillPicture(post);
  renderComments();
};

export { renderModal };

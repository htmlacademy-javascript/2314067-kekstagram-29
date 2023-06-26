import {getRandomArrayElement, getRandomId} from './util.js';

const POSTS_COUNT = 25;
const DESCRIPTIONS = [
  'Делайте в вашей жизни то, что меньше заставляет вас смотреть в свой телефон.',
  'Жизнь похожа на фотокамеру: вам просто нужно смотреть на нее с улыбкой.',
  'Не ждите идеального момента. Берите каждый момент и делайте его идеальным.',
  'Просто ешьте, живите и любите. Затем с утра повторяйте каждый день.',
  'Это просто моя жизнь в моем неповторимом стиле.',
  'Жизнь похожа на фотографию. Мы развиваемся только из негативов.',
];
const NAMES_COMMENTS = [
  'Иван',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
];
const MESSAGES_COMMENTS = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];
let commentsId = 1;
let postId = 1;

// Создание объекта
const createMessage = () => {
  const message = Array.from({length: getRandomId(1, 2)}, () => getRandomArrayElement(MESSAGES_COMMENTS));
  return [...new Set(message)].join (' ');
};

const createComments = () => ({
  id: commentsId++,
  avatar: `img/avatar-${getRandomId(1, 6)}.svg`,
  message: createMessage(),
  name: getRandomArrayElement(NAMES_COMMENTS),
});

const createPost = () => ({
  id: postId,
  url: `photos/${postId++}.jpg`,
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomId(15, 200),
  comments: Array.from({length: getRandomId(0, 30)}, createComments),
});

const createPosts = () => Array.from({length: POSTS_COUNT}, createPost);

export {createPosts};

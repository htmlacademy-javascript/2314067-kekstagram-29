// Получение уникального Id в заданном диапазоне.
const getRandomId = (min, max) => {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};
// const getRandomId = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

// Поиск случайного элемента в переданном массиве.
const getRandomArrayElement = (array) => array[getRandomId(0, array.length - 1)];

export {getRandomArrayElement, getRandomId};

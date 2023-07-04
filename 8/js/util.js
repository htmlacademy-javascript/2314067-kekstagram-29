// Получение уникального Id в заданном диапазоне.
const getRandomId = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

// Поиск случайного элемента в переданном массиве.
const getRandomArrayElement = (elements) => elements[getRandomId(0, elements.length - 1)];

export {getRandomArrayElement, getRandomId};

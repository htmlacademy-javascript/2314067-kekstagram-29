const getRandomId = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

const getRandomArrayElement = (elements) => elements[getRandomId(0, elements.length - 1)];

const isEscapeKey = (event) => event.key === 'Escape';

export { getRandomArrayElement, getRandomId, isEscapeKey };

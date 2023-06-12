// Функция для проверки длины строки
const checkStrLength = (string, length) => string.length <= length;

console.log(checkStrLength('проверяемая строка', 20));

// Функция для проверки, является ли строка палиндромом
const checkPalindrome = (string) => {
  string = string.toUpperCase().replaceAll(' ', '');
  return string === string.split('').reverse().join('');
};

console.log(checkPalindrome('Лёша на полке клопа нашёл '));

// Дополнительное задание
const extractingNumbers = (stringName) => parseInt(String(stringName).replace(/[^0-9]+/g, ''), 10);

console.log(extractingNumbers(-1));

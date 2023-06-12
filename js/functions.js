// Функция для проверки длины строки
const checkStrLength = (str, length) => str.length <= length;

console.log(checkStrLength('проверяемая строка', 20));

// Функция для проверки, является ли строка палиндромом
const checkPalindrome = (string) => {
  string = String(string).toUpperCase().replaceAll(' ', '');
  return string === string.split('').reverse().join('');
};

console.log(checkPalindrome('Лёша на полке клопа нашёл '));

// Дополнительное задание
const extractingNumbers = function (stringName) {
  stringName = parseInt(String(stringName).replace(/[^0-9]+/g, ''), 10);
  return stringName;
};

console.log(extractingNumbers('ECMAScript 2022'));

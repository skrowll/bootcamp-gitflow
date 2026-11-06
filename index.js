const MIN_NUMBER = 1;
const MAX_NUMBER = 100;

const number =
  Math.floor(Math.random() * (MAX_NUMBER - MIN_NUMBER + 1)) + MIN_NUMBER;

const result = number % 2 === 0 ? "par" : "ímpar";

console.log(`O número ${number} é ${result}!`);

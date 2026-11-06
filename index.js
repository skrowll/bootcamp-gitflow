const number = Math.floor(Math.random() * 100) + 1;

const result = number % 2 === 0 ? "par" : "ímpar";

console.log(`O número ${number} é ${result}!`);

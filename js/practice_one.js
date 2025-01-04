'use strict';

// TASK - 1;

// const number = prompt('Скільки хвилин ти сьогодні програмував?');
// const getHours = Number.parseInt(number / 60);
// //   const getMinutes = number - getHours * 60;
// const getMinutes = number % 60;
// const hours = String(getHours).padStart(2, '0');
// const minutes = String(getMinutes).padStart(2, '0');
// console.log(`${hours}:${minutes}`);

// TASK - 2;

// const userMessage = prompt('Please enter your message?'); /* Hello */
// // визначаємо довжину строки;
// const userMessageLength = userMessage.length;
// console.log(userMessageLength);                   /* 5 */
// // визначаємо останньiй індекса;
// const lastMessageIndex = userMessageLength - 1;
// console.log(lastMessageIndex);                   /* 4 */
// // визначаэмо значення останнього індекса;
// const lastMessageEl = userMessage[userMessage.length - 1];
// console.log(lastMessageEl);                      /* o */
// // приводимо це значення в UpperCase;
// const lastElUppercase = lastMessageEl.toUpperCase();
// console.log(lastElUppercase);                    /* O */

// TASK - 3;

// function randomInRange(min, max) {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// }

// console.log(randomInRange(5, 100));

// Ключова ідея:
// (max - min + 1) визначає кількість можливих чисел у діапазоні.
// + min зсуває діапазон до потрібного мінімального значення.
// Math.floor гарантує, що результат завжди буде цілим числом.

// TASK - 4;

// function getAge(age) {
//   const userAge = prompt('Your age?');
//   const isAdult = userAge >= age;
//   return Boolean(isAdult);
// }

// console.log(getAge(18));

// const age = prompt('Enter your age?');

// function isAdult(age) {
//   return Number.parseInt(age) >= 18;
// }

// console.log(isAdult(age));

// TASK - 5;

// function min(a, b) {
//   // return a < b ? a : b;
//   return Math.min(a, b);
// }

// console.log(min(10, 20));

// TASK - 6;

// const value = prompt('Enter some value?');
// const valueNum = Number(value);

// console.log(`${value} - ${!Number.isNaN(valueNum)}`);

// TASK - 6;

// const userName = prompt('Enter your name?');
// const userSurname = prompt('Enter your surname?');
// console.log(`${userName} ${userSurname}`);

// const result = userName.concat(' ', userSurname);
// console.log(result);

// TASK - 7;

// const number = prompt('Enter number?');
// function getNumberDegree(number) {
//   //   const numberDegree = number ** number;
//   const numberDegree = Math.pow(number, number);
//   return `${number} в ступені ${number} дорівнює ${String(numberDegree)}`;
// }

// console.log(getNumberDegree(number));

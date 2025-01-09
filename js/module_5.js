// function abbrevName(name) {
//   let upperCaseLetter = [];

//   const words = name.split(' ');

//   for (let word of words) {
//     upperCaseLetter.push(word.charAt(0).toUpperCase());
//   }

//   return upperCaseLetter.join('.');
// }

// function abbrevName(name) {
//   return `${name[0].toUpperCase()}.${name[
//     name.indexOf(' ') + 1
//   ].toUpperCase()}`;
// }

// console.log(abbrevName('ArsdDen ShulFika'));

// for (let i = 2; i <= 10; i += 1) {
//   if (i % 2 !== 0) {
//     alert(i);
//   }
// }

// let i = 0;
// while (i < 3) {
//   alert(`число ${i}!`);
//   i += 1;
// }

// let a = +prompt('a?', 'Num');

// switch (a) {
//   case 0:
//     alert(0);
//     break;
//   case 1:
//     alert(1);
//     break;
//   case 2:
//   case 3:
//     alert('2, 3');
//     break;

//   default:
//     alert('No passend');
// }

// function checkAge(age) {
//   return age > 18 ? true : confirm('Батьки дозволили?');
// }

// console.log(checkAge(17));

// function checkMin(a, b) {
//   return; /* Math.min(a, b) */
//   /* a < b ? a : b; */
// }

// console.log(checkMin(17, 21));

// function pow(x, n) {
//   let result = x;
//   for (let i = 1; i < n; i += 1) {
//     result *= x;
//   }
//   return result;
// }

// let x = prompt('x?', '');
// let n = prompt('n?', '');

// if (n < 1) {
//   prompt('Please enter valid n...');
// } else {
//   alert(pow(x, n));
// }

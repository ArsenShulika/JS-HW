'use strict';

// TASK - 1;

// function makeTransaction(quantity, pricePerDroid, customerCredits) {
//   const totalPrice = quantity * pricePerDroid;
//   if (totalPrice <= customerCredits) {
//     return `You ordered ${quantity} droids worth ${totalPrice} credits!`;
//   }
//   return 'Insufficient funds!';
// }

// console.log(makeTransaction(5, 3000, 23000)); // "You ordered 5 droids worth 15000 credits!"
// console.log(makeTransaction(3, 1000, 15000)); // "You ordered 3 droids worth 3000 credits!"
// console.log(makeTransaction(10, 5000, 8000)); // "Insufficient funds!"
// console.log(makeTransaction(8, 2000, 10000)); // "Insufficient funds!"
// console.log(makeTransaction(10, 500, 5000)); // "You ordered 10 droids worth 5000 credits!"

// TASK - 2;

// function formatMessage(message, maxLength) {
//   if (message.length <= maxLength) {
//     return message;
//   }
//   return `${message.slice(0, maxLength)} ...`;
// }

// console.log(formatMessage('Curabitur ligula sapien', 16)); // "Curabitur ligula..."
// console.log(formatMessage('Curabitur ligula sapien', 23)); // "Curabitur ligula sapien"
// console.log(formatMessage('Vestibulum facilisis purus nec', 20)); // "Vestibulum facilisis..."
// console.log(formatMessage('Vestibulum facilisis purus nec', 30)); // "Vestibulum facilisis purus nec"
// console.log(formatMessage('Nunc sed turpis a felis in nunc fringilla', 15)); // "Nunc sed turpis..."
// console.log(formatMessage('Nunc sed turpis a felis in nunc fringilla', 41)); // "Nunc sed turpis a felis in nunc fringilla"

// TASK - 3;

// function checkForSpam(message) {
//   return (
//     message.toLowerCase().includes('spam') ||
//     message.toLowerCase().includes('sale')
//   );
// }

// console.log(checkForSpam('Latest technology news')); // false
// console.log(checkForSpam('JavaScript weekly newsletter')); // false
// console.log(checkForSpam('Get best sale offers now!')); // true
// console.log(checkForSpam('Amazing SalE, only tonight!')); // true
// console.log(checkForSpam('Trust me, this is not a spam message')); // true
// console.log(checkForSpam('Get rid of sPaM emails. Our book in on sale!')); // true
// console.log(checkForSpam('[SPAM] How to earn fast money?')); // true

// TASK - 4;

// function getShippingCost(country) {
//   let price;
//   switch (country) {
//     case 'China':
//       price = 100;
//       return `Shipping to ${country} will cost ${price} credits`;
//     case 'Chile':
//       price = 250;
//       return `Shipping to ${country} will cost ${price} credits`;
//     case 'Australia':
//       price = 170;
//       return `Shipping to ${country} will cost ${price} credits`;
//     case 'Jamaica':
//       price = 120;
//       return `Shipping to ${country} will cost ${price} credits`;
//     default:
//       return 'Sorry, there is no delivery to your country';
//   }
// }

// console.log(getShippingCost('Australia')); // "Shipping to Australia will cost 170 credits"
// console.log(getShippingCost('Germany')); // "Sorry, there is no delivery to your country"
// console.log(getShippingCost('China')); // "Shipping to China will cost 100 credits"
// console.log(getShippingCost('Chile')); // "Shipping to Chile will cost 250 credits"
// console.log(getShippingCost('Jamaica')); // "Shipping to Jamaica will cost 120 credits"
// console.log(getShippingCost('Sweden')); // "Sorry, there is no delivery to your country"

// const login = prompt('Please, enter your login?');

// if (login === 'Admin') {
//   const password = prompt('Please, enter your password?');

//   if (password === '' || password === null) {
//     alert('Canceled');
//   } else if (password === 'Master') {
//     alert('Welcome!');
//   } else {
//     alert('Wrong password');
//   }
// } else if (login === '' || login === null) {
//   alert('Canceled');
// } else {
//   alert('Wrong password');
// }

// =======================================================================================================================================================

// const isOnline = true;
// const isBlocked = false;
// const canChat = isOnline && !isBlocked;
// // true && !false -> true && true -> true

// if (canChat) {
//   console.log('Can type in chat!');
// } else {
//   console.log('Blocked from typing in chat!');
// }

// =======================================================

// let link = 'https://www.edu.goit.global/uk';
// if (!link.endsWith('/')) {
//   link += '/';
// }
// console.log(link);

// ====================================================

// let link = 'https://www.edu.goit.global/uk';

// if (!link.endsWith('/') && link.includes('goit')) {
//   link += '/';
// }

// ======================================================

// link = !link.endsWith('/') && link.includes('goit') ? (link += '/') : link;
// console.log(link);

// link += !link.endsWith('/') && link.includes('goit') ? '/' : '';
// console.log(link);

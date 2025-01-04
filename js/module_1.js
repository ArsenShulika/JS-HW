'use strict';

// TASK-1

// function makeTransaction(quantity, pricePerDroid) {
//   const totalPrice = quantity * pricePerDroid;
//   return `You ordered ${quantity} droids worth ${totalPrice} credits!`;
// }

// console.log(makeTransaction(5, 3000)); // "You ordered 5 droids worth 15000 credits!"
// console.log(makeTransaction(3, 1000)); // "You ordered 3 droids worth 3000 credits!"
// console.log(makeTransaction(10, 500)); // "You ordered 10 droids worth 5000 credits!"

// TASK-2

// function getShippingMessage(country, price, deliveryFee) {
//   const totalPrice = price + deliveryFee;
//   return `Shippeng to ${country} will coast ${totalPrice} credits`;
// }

// console.log(getShippingMessage('Australia', 120, 50)); // "Shipping to Australia will cost 170 credits"
// console.log(getShippingMessage('Germany', 80, 20)); // "Shipping to Germany will cost 100 credits"
// console.log(getShippingMessage('Sweden', 100, 20)); // "Shipping to Sweden will cost 120 credits"

// TASK-3

// function getElementWidth(content, padding, border) {
//   const contentWidth = Number.parseFloat(content);
//   const paddingWidth = Number.parseFloat(padding) * 2;
//   const borderWidth = Number.parseFloat(border) * 2;
//   return contentWidth + paddingWidth + borderWidth;

//   const elementWidth =
//     Number.parseFloat(padding) * 2 +
//     Number.parseFloat(border) * 2 +
//     Number.parseFloat(content);
//   return elementWidth;
// }

// console.log(getElementWidth('50px', '8px', '4px')); // 74
// console.log(getElementWidth('60px', '12px', '8.5px')); // 101
// console.log(getElementWidth('200px', '0px', '0px')); // 200

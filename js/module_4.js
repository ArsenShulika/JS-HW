'use strict';

// TASK - 1;

function isEnoughCapacity(products, containerSize) {
  let total = 0;
  const arrProductsValue = Object.values(products);
  for (const value of arrProductsValue) {
    total += value;
    if (total > containerSize) {
      return false;
    }
  }
  return true;
}

console.log(isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8)); // true

console.log(isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12)); // false

console.log(isEnoughCapacity({ apples: 1, lime: 5, tomatoes: 3 }, 14)); // true

console.log(isEnoughCapacity({ apples: 18, potatoes: 5, oranges: 2 }, 7)); // false

// TASK - 2;

function calcAverageCalories(days) {
  if (Array.isArray(days) && days.length === 0) {
    return 0;
  }
  let totalCalories = 0;
  for (const day of days) {
    totalCalories += day.calories;
  }
  const result = totalCalories / days.length;

  return result;
}

console.log(
  calcAverageCalories([
    { day: 'monday', calories: 3010 },
    { day: 'tuesday', calories: 3200 },
    { day: 'wednesday', calories: 3120 },
    { day: 'thursday', calories: 2900 },
    { day: 'friday', calories: 3450 },
    { day: 'saturday', calories: 3280 },
    { day: 'sunday', calories: 3300 },
  ])
); // 3180

console.log(
  calcAverageCalories([
    { day: 'monday', calories: 2040 },
    { day: 'tuesday', calories: 2270 },
    { day: 'wednesday', calories: 2420 },
    { day: 'thursday', calories: 1900 },
    { day: 'friday', calories: 2370 },
    { day: 'saturday', calories: 2280 },
    { day: 'sunday', calories: 2610 },
  ])
); // 2270

console.log(calcAverageCalories([])); // 0

// TASK - 3;

const profile = {
  username: 'Jacob',
  playTime: 300,
  changeUsername(newName) {
    this.username = newName;
  },
  updatePlayTime(hours) {
    this.playTime += hours;
  },
  getInfo() {
    return `${this.username} has ${this.playTime} active hours!`;
  },
};

console.log(profile.getInfo()); // "Jacob has 300 active hours!"

profile.changeUsername('Marco');
console.log(profile.getInfo()); // "Marco has 300 active hours!"

profile.updatePlayTime(20);
console.log(profile.getInfo()); // "Marco has 320 active hours!"

// ===================================================================================================================================================================================================================

// const books = [
//   { title: 'The Last Kingdom', author: 'Bernard Cornwell' },
//   { title: 'Beside Still Waters', author: 'Robert Sheckley' },
//   { title: 'The Dream of a Ridiculous Man', author: 'Fyodor Dostoevsky' },
// ];

// const authorToSearchFor = 'Robert Sheckley';

// for (const book of books) {
//   if (book.author === authorToSearchFor) {
//     console.log(book);
//     console.log(book.title);
//     console.log(book.rating);
//   }
// }

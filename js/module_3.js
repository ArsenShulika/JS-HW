'use strict';

// TASK - 1;

function slugify(title) {
  const slugtitleSplit = title.toLowerCase().split(' ');
  const slugTitleJoin = slugtitleSplit.join('-');
  return slugTitleJoin;
}

console.log(slugify('Arrays for beginners')); // "arrays-for-beginners"
console.log(slugify('English for developer')); // "english-for-developer"
console.log(slugify('Ten secrets of JavaScript')); // "ten-secrets-of-javascript"
console.log(slugify('How to become a JUNIOR developer in TWO WEEKS')); // "how-to-become-a-junior-developer-in-two-weeks"

// TASK-2

function makeArray(firstArray, secondArray, maxLength) {
  const concatArray = firstArray.concat(secondArray);
  if (concatArray.length > maxLength) {
    return concatArray.slice(0, maxLength);
  }
  return concatArray;
}

console.log(makeArray(['Mango', 'Poly'], ['Ajax', 'Chelsea'], 3)); // ["Mango", "Poly", "Ajax"]
console.log(makeArray(['Mango', 'Poly', 'Houston'], ['Ajax', 'Chelsea'], 4)); // ["Mango", "Poly", "Houston", "Ajax"]
console.log(makeArray(['Mango'], ['Ajax', 'Chelsea', 'Poly', 'Houston'], 3)); // ["Mango", "Ajax", "Chelsea"]
console.log(makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus'], 2)); // ["Earth", "Jupiter"]
console.log(makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus'], 4)); // ["Earth", "Jupiter", "Neptune", "Uranus"]
console.log(makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus', 'Venus'], 0)); // []

// TASK - 3;

function filterArray(numbers, value) {
  const newArray = [];
  for (const number of numbers) {
    if (number > value) {
      newArray.push(number);
    }
  }
  return newArray;
}

console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]

function padIt(str, n) {
  let count = 0;
  while (count < n) {
    if (count % 2 === 0) {
      str = '*' + str;
    } else {
      str = str + '*';
    }
    count += 1;
  }
  return str;
}

padIt('hello', 5);

// ========================================================================================================

// function pickIt(arr) {
//   var odd = [],
//     even = [];
//   for (let i = 0; i < arr.length; i++)
//     if (arr[i] % 2 == 0) {
//       even.push(arr[i]);
//     } else {
//       odd.push(arr[i]);
//     }
//   return [odd, even];
// }

// pickIt([10, 20, 30]), [[], [10, 20, 30]];

// ==================================================================================================================
// function positiveSum(arr) {
//   let sum = 0;
//   for (let i = 0; i <= arr.length; i += 1) {
//     if (arr[i] > 0) {
//       sum += arr[i];
//     }
//   }
//   return sum;
// }

// positiveSum([1, -2, 3, 4, 5]);

// ======================================================================================================================

// function solution(str) {
//   debugger;
//   let newStr = '';

//   for (let i = str.length - 1; i >= 0; i -= 1) {
//     newStr += str[i];
//   }
//   return newStr;
// }

// solution('world');

// ============================================================================================================

// const arr = ['apple', 'banan', 'pineapple', 'nuts'];
// console.log(arr.join('-'));
// const arr = 'apple, banan, pineapple, nuts';
// console.log(arr.split(', '));
// const arr = ['apple', 'banan', 'pineapple', 'nuts'];
// console.log(arr.join('-'));

// ==============================================

// function countSheeps(sheep) {
//   let total = 0;
//   for (let i = 0; i < sheep.length; i += 1) {
//     if (
//       sheep[i] &&
//       sheep[i] !== undefined &&
//       sheep[i] !== null &&
//       sheep[i] !== 0 &&
//       sheep[i] !== null &&
//       sheep[i] !== false
//     ) {
//       total += sheep[i];
//     }
//   }
//   return total;
// }

// function countSheeps(arr) {
//   debugger;
//   let r = arr.filter(true).length;
//   return r;
// }

// countSheeps([undefined, null, false, true, true, false, null, undefined]);

// const user = {
//   name: 'Igor',
//   car: 'Mercedes',
//   carColor: 'black',
// };

// const checkKeyInObject = (object, key) => {
/* key in object  
  
  OR*/
//   for (const objectKey in object) {
//     if (objectKey === key) {
//       return true;
//     }
//   }
//   return false;
// OR
//   return Object.keys(object).includes(key);
// };

// console.log(checkKeyInObject(user, 'color'));
// console.log(checkKeyInObject(user, 'car'));
// console.log(checkKeyInObject(user, 'color'));
// console.log(checkKeyInObject(user, 'car'));

// ====================================================

// const user = {
//   name: 'Peter',
//   surname: 'Parker',
//   age: '22',
//   position: 'spider-man',
// };

// user.getInfo = function () {
//   return `Name: ${this.name}. Surname: ${this.surname}. Age: ${this.age}. Position: ${this.position} `;
// };

// console.log(user.getInfo());

// ====================================================

// const cart = {
//   apple: 50,
//   banana: 30,
//   orange: 40,
// };

// const values = Object.values(cart);
// const totalCost = values.reduce((acc, value) => acc + value, 0);

// console.log(totalCost);

// ======================================================

// const myObj = {
//   name: 'John',
//   age: 30,
//   gender: 'male',
// };

// const getObjectKeys = myObj => {
//   return (arrOfKeys = Object.keys(myObj));
// };

// console.log(getObjectKeys(myObj));

// ========================================================

// const prices = [1000, 240, 670, 360, 89, 20];

// const sortDescending = prices => prices.toSorted((a, b) => b - a);
// const sortAscending = prices => prices.toSorted((a, b) => a - b);

// const descSort = prices.toSorted((a, b) => b - a);
// const ascSort = prices.toSorted((a, b) => a - b);

// console.log(sortDescending(prices));
// console.log(sortAscending(prices));

// console.log(descSort);
// console.log(ascSort);

// =====================================================

// const names = ['ivan', 'Maria', 'Anna'];

// const sayHi = names => {
//   return names.map(name => `${name} привіт!`);
// };

// console.log(sayHi(names));

// =====================================================

// const students = [
//   {
//     name: 'Alex',
//     age: 18,
//   },
//   {
//     name: 'Stas',
//     age: 18,
//   },
//   {
//     name: 'Mike',
//     age: 22,
//   },
//   {
//     name: 'Den',
//     age: 20,
//   },
// ];

// const age = students.every(student => student.age > 18);
// console.log(age);

// =======================================================

// const allTopics = courses
//   .flatMap(course => course.topics)
//   .filter((item, index, array) => array.indexOf(item) === index);

// ===================================================

// const user = {
//   name: 'John',
//   age: 20,
//   hobby: 'tenis',
//   premium: true,
// };

// user.mood = 'happy';
// user.hobby = 'skydiving';
// user.premium = false;

// const objKeys = Object.keys(user);
// for (const key of objKeys) {
//   console.log(`${key}: ${user[key]}`);
// }

// ====================================================

const tweets = [
  { id: '000', likes: 5, tags: ['js', 'nodejs'] },
  { id: '002', likes: 2, tags: ['html', 'css'] },
  { id: '003', likes: 17, tags: ['html', 'js', 'nodejs'] },
  { id: '004', likes: 8, tags: ['css', 'react'] },
  { id: '005', likes: 0, tags: ['js', 'nodejs', 'react'] },
];

// const statistic = {};
// tweets
//   .flatMap(tweet => tweet.tags)
//   .forEach(tag => {
//     if (statistic[tag]) {
//       statistic[tag] += 1;
//     } else {
//       statistic[tag] = 1;
//     }
//   });

// ===============================================

// tweets
//   .flatMap(tweet => tweet.tags)
//   .reduce((acc, tag) => {
//     return {
//       ...acc,
//       [tag]: stat[tag] ? stat[tag] + 1 : 1,
//     };
//   }, {});

// console.log(statistic);

// ==================================================

// const n = 12;

// function digitize(n) {
//   return String(n).split('').reverse();
// }
// console.log(digitize(0));

function betterThanAverage(classPoints, yourPoints) {
  const total = classPoints.reduce((acc, point) => acc + point, 0);
  const average = total / classPoints.length;
  console.log(average);
  return average > yourPoints;
}

const note = [5, 5, 3, 6, 8, 9, 10, 17];

betterThanAverage(note, 7);

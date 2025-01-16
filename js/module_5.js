// TASK - 1;

const getUserNames = users => users.map(user => user.name);

console.log(
  getUserNames([
    {
      name: 'Moore Hensley',
      email: 'moorehensley@indexia.com',
      balance: 2811,
    },
    {
      name: 'Sharlene Bush',
      email: 'sharlenebush@tubesys.com',
      balance: 3821,
    },
    {
      name: 'Ross Vazquez',
      email: 'rossvazquez@xinware.com',
      balance: 3793,
    },
    {
      name: 'Elma Head',
      email: 'elmahead@omatom.com',
      balance: 2278,
    },
    {
      name: 'Carey Barr',
      email: 'careybarr@nurali.com',
      balance: 3951,
    },
    {
      name: 'Blackburn Dotson',
      email: 'blackburndotson@furnigeer.com',
      balance: 1498,
    },
    {
      name: 'Sheree Anthony',
      email: 'shereeanthony@kog.com',
      balance: 2764,
    },
  ])
); // ["Moore Hensley", "Sharlene Bush", "Ross Vazquez", "Elma Head", "Carey Barr", "Blackburn Dotson", "Sheree Anthony"]

// TASK - 2;

const getUsersWithFriend = (users, friendName) => {
  return users.filter(user => {
    return user.friends.includes(friendName);
  });
};

const allUsers = [
  {
    name: 'Moore Hensley',
    friends: ['Sharron Pace'],
  },
  {
    name: 'Sharlene Bush',
    friends: ['Briana Decker', 'Sharron Pace'],
  },
  {
    name: 'Ross Vazquez',
    friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
  },
  {
    name: 'Elma Head',
    friends: ['Goldie Gentry', 'Aisha Tran'],
  },
  {
    name: 'Carey Barr',
    friends: ['Jordan Sampson', 'Eddie Strong'],
  },
  {
    name: 'Blackburn Dotson',
    friends: ['Jacklyn Lucas', 'Linda Chapman'],
  },
  {
    name: 'Sheree Anthony',
    friends: ['Goldie Gentry', 'Briana Decker'],
  },
];

console.log(getUsersWithFriend(allUsers, 'Briana Decker'));
// [
//   {
//     name: "Sharlene Bush",
//     friends: ["Briana Decker", "Sharron Pace"]
//   },
//   {
//     name: "Sheree Anthony",
//     friends: ["Goldie Gentry", "Briana Decker"]
//   }
// ]

console.log(getUsersWithFriend(allUsers, 'Goldie Gentry'));
// [
//   {
//     name: "Elma Head",
//     friends: ["Goldie Gentry", "Aisha Tran"]
//   },
//   {
//     name: "Sheree Anthony",
//     friends: ["Goldie Gentry", "Briana Decker"]
//   }
// ]

console.log(getUsersWithFriend(allUsers, 'Adrian Cross')); // []

// TASK - 3;

const sortByDescendingFriendCount = users => {
  return users.toSorted((a, b) => b.friends.length - a.friends.length);
};

console.log(
  sortByDescendingFriendCount([
    {
      name: 'Moore Hensley',
      friends: ['Sharron Pace'],
      gender: 'male',
    },
    {
      name: 'Sharlene Bush',
      friends: ['Briana Decker', 'Sharron Pace'],
      gender: 'female',
    },
    {
      name: 'Ross Vazquez',
      friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
      gender: 'male',
    },
    {
      name: 'Elma Head',
      friends: ['Goldie Gentry', 'Aisha Tran'],
      gender: 'female',
    },
    {
      name: 'Carey Barr',
      friends: ['Jordan Sampson', 'Eddie Strong'],
      gender: 'male',
    },
    {
      name: 'Blackburn Dotson',
      friends: ['Jacklyn Lucas', 'Linda Chapman'],
      gender: 'male',
    },
    {
      name: 'Sheree Anthony',
      friends: ['Goldie Gentry', 'Briana Decker'],
      gender: 'female',
    },
  ])
);
// [
//   {
//     name: "Ross Vazquez",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     gender: "male"
//   },
//   {
//     name: "Sharlene Bush",
//     friends: ["Briana Decker", "Sharron Pace"],
//     gender: "female"
//   },
//   {
//     name: "Elma Head",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     gender: "female"
//   },
//   {
//     name: "Carey Barr",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     gender: "male"
//   },
//   {
//     name: "Blackburn Dotson",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     gender: "male"
//   },
//   {
//     name: "Sheree Anthony",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     gender: "female"
//   },
//   {
//     name: "Moore Hensley",
//     friends: ["Sharron Pace"],
//     gender: "male"
//   }
// ]

// TASK - 4;

const getTotalBalanceByGender = (users, gender) =>
  users
    .filter(user => user.gender === gender)
    .reduce((total, user) => total + user.balance, 0);

const clients = [
  {
    name: 'Moore Hensley',
    gender: 'male',
    balance: 2811,
  },
  {
    name: 'Sharlene Bush',
    gender: 'female',
    balance: 3821,
  },
  {
    name: 'Ross Vazquez',
    gender: 'male',
    balance: 3793,
  },
  {
    name: 'Elma Head',
    gender: 'female',
    balance: 2278,
  },
  {
    name: 'Carey Barr',
    gender: 'male',
    balance: 3951,
  },
  {
    name: 'Blackburn Dotson',
    gender: 'male',
    balance: 1498,
  },
  {
    name: 'Sheree Anthony',
    gender: 'female',
    balance: 2764,
  },
];

console.log(getTotalBalanceByGender(clients, 'male')); // 12053

console.log(getTotalBalanceByGender(clients, 'female')); // 8863

// function abbrevName(name) {
//   let upperCaseLetter = [];

//   const words = name.split(' ');

//   for (let word of words) {
//     upperCaseLetter.push(word.charAt(0).toUpperCase());
//   }

//   return upperCaseLetter.join('.');
// }

// second methode ===========================================

// function abbrevName(name) {
//   return `${name[0].toUpperCase()}.${name[
//     name.indexOf(' ') + 1
//   ].toUpperCase()}`;
// }

// console.log(abbrevName('ArsdDen ShulFika'));

// ================================

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

// ================================

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

// ================================

// function checkAge(age) {
//   return age > 18 ? true : confirm('Батьки дозволили?');
// }

// console.log(checkAge(17));

// function checkMin(a, b) {
//   return; /* Math.min(a, b) */
//   /* a < b ? a : b; */
// }

// console.log(checkMin(17, 21));

// ================================

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

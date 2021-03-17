'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

 const openingHours = {
    [days[3]]: {
      open: 12,
      close: 22,
    },
    [days[4]]: {
      open: 11,
      close: 23,
    },
    [days[2 + 3]]: {
      open: 0, // Open 24 hours
      close: 24,
    }
 };

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // ES6 enhanced object literals
  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
  },

  orderDelivery({starterIndex = 1, mainIndex = 0, time = '20:00', address}) {
    console.log(`Order recieved ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
  },

// can remove function like the two above

  orderPasta: function(ing1, ing2, ing3) {
    console.log(`Here is your pasta with ${ing1}, ${ing2}, and ${ing3}`);
  },

  orderPizza: function(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
    console.log(`The main ingredient is ${mainIngredient}, the other ingredient(s) are ${otherIngredients}`);
  }
};

const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `we are open ${properties.length} days a week on: `;
console.log(openStr);

for(const day of Object.keys(openingHours)) {
  console.log(day);
}

// OPTIONAL CHAINING
// if(restaurant.openingHours && restaurant.openingHours.mon) 
// console.log(resaurant.openingHours.mon.open);

// //same result as if statement above but with optional chaining

// console.log(restaurant.openingHours.mon?.open); // shows undefined
// console.log(restaurant.openingHours?.Thursday?.open); // shows 12
// // ?'s check to see if it exists

// const weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
// for(const day of weekDays) {
//   console.log(day);
//   const open = restaurant.openingHours[day]?.open || 'N/A'
//   const close = restaurant.openingHours[day]?.close || 'N/A'
//   console.log(`on ${day}, we open at ${open} and close at ${close}`);
// }

// // OPTIONAL CHAINING WITH METHODS
// console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
// console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist');

// // OPTIONAL CHAINING WITH ARRAYS
// const arr = [
//   {name: 'Brax', age: 24, gender: 'male'}
// ];
// console.log(arr[0]?.name ?? 'Array element doesnt exist'); // shows 'Brax'
// console.log(arr[1]?.age ?? 'Array element doesnt exist'); // doesnt exist

// ---------------------------------------------
// if(restaurant.openingHours.Thursday) console.log(restaurant.openingHours.Thursday.open);

// THE FOR-OF LOOP
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// for(const item of menu) console.log(item);

// for(const item of menu.entries()) console.log(`${item[0] + 1}: ${item[1]}`);

// for(const [i, el] of menu.entries()) console.log(`${i + 1}: ${el}`);

// restaurant.orderPizza('pepperoni', 'beef', 'bacon')
// restaurant.orderPizza('cheese')

// Rest
// const arr = [1, 2, ...[3, 4]];

// const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(a, b, others)

// const [pizza, , risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu]
// console.log(pizza, risotto, otherFood);

// Rest Objects
// const {sat, ...weekdays} = restaurant.openingHours
// console.log(weekdays);

// Rest Funcitons
// const add = function(...numbers) {
//   let sum = 0;
//   for(let i = 0; i < numbers.length; i++) {
//       sum += numbers[i]
//   }
//   console.log(sum);
// }

// add(2, 3)
// add(2, 3, 4, 5, 6)
// add(1)
// add(9, 8, 1)

// const x = [23, 69, 96]
// add(...x)

// add(23, ...x)
// const arr = [7, 8, 9];
// const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
// const goodNewArr = [1, 2, ...arr];
// console.log(goodNewArr);
// console.log(...arr);

// const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// console.log(newMenu);

// Copy array
// const mainMenuCopy = [...restaurant.mainMenu];

// Join 2 arrays
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(menu);

// const str = 'Brax';
// const letters = [...str, ' ', 's'];
// console.log(letters);
// console.log(...str);
// console.log(str);
// console.log(`${...string}`); ||| BAD WILL NOT WORK


// const ingredients = [prompt('Let\'s make pasta! Ingredient 1?'), prompt('Let\'s make pasta! Ingredient 2?'), prompt('Let\'s make pasta! Ingredient 3?')];
// console.log(ingredients);

// restaurant.orderPasta(...ingredients);

// OBJECTS
// const newRestaurant = {foundedIn: 1996, ...restaurant, founder: 'Brax'}
// console.log(newRestaurant);


// const restaurantCopy = {...restaurant};
// restaurantCopy.name = 'McCrib';
// console.log(restaurantCopy.name);
// console.log(restaurant.name);

// restaurant.orderDelivery({
//   time: '22:30',
//   address: 'Via del sole, 21',
//   mainIndex: 2,
//   starterIndex: 2,  
// });

// restaurant.orderDelivery({
//   address: 'Via del sole, 21',
//   mainIndex: 2,
// })

// const {name, openingHours, categories} = restaurant;
// console.log(name, openingHours, categories);
// // RENAMING VARIABLE NAMES
// const {name: restaurantName, openingHours: hours, categories: tags} = restaurant;
// console.log(restaurantName, hours, tags);
// // Default values
// const {menu = [], starterMenu: starters = []} = restaurant;
// console.log(menu, starters);
// // Mutating variables
// let a = 111;
// let b = 999;
// const obj = {a: 23, b: 10, c: 69};
// ({a, b} = obj);
// console.log(a, b);
// // Nested Objects
// const {fri: {open, close}} = openingHours;
// console.log(open, close);

// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// const [x, y, z] = arr;
// console.log(x, y, z)
// console.log(arr)

// let [first, , second] = restaurant.categories;
// console.log(first, second);

// const temp = first;
// first = second;
// second = temp;
// console.log(first, second);

// [first, second] = [second, first]
// console.log(first, second)

// const [starter, main] = restaurant.order(2, 0);
// console.log(starter, main)

// const nested = [2, 4, [5, 6]];
// // const [i, , j] = nested;
// // console.log(i, j);

// const [i, , [j, k]] = nested
// console.log(i, j, k);

// // default values
// const [p = 1, q = 1, r 
// ----------------------------------------------------------------
// LOGICAL OPERATORS
  // they use any data type, return any data type, short-circuiting

  // restaurant.numGuests = 0;
  // const guests = restaurant.numGuests || 10
  // console.log(guests);
  
  // NULLISH COALESCING OPERATOR
  // const guestsCorrect = restaurant.numGuests ?? 10;
  // console.log(guestsCorrect);

  // OR operator
  // pulls value of first truthy value or last falsy if all false
  // console.log(3 || 'Brax');
  // console.log('' || 'Brax');
  // console.log(true || 0);
  // console.log(undefined || null);

  // console.log(undefined || 0 || '' || false ||  'hello' || 23);

  // restaurant.numGuests = 23;
  // const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
  // console.log(guests1);

  // const guests2 = restaurant.numGuests || 10;
  // console.log(guests2);

  // AND operator
  // pulls value of first falsy value or last truthy if all true
  // console.log(0 && 'Brax');
  // console.log(true && false);
  // console.log(1 && 'brax' && true && 'mango' && null && 25);
  // console.log(1 && true && undefined && 'brax');

  // if(restaurant.orderPizza) {
  //   restaurant.orderPizza('pepperoni', 'bacon');
  // }

  // restaurant.orderPizza && restaurant.orderPizza('pep', 'beef', 'bacon')

  // ----------------------------------------------------------------

  // CODING CHALLANGE

  // Coding Challenge #1

/* 
We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

GOOD LUCK 😀
*/

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// CODING CHALLANGE 1

// // 1. 
// const [players1, players2] = game.players;
// console.log(players1, players2);

// // 2.
// const [gk, ...fieldPlayers] = players1;
// console.log(gk, fieldPlayers);

// // 3.
// const allPlayers = [...players1, ...players2];
// console.log(allPlayers);

// // 4.
// const players1Final = [...players1, 'Thiago', 'Coutinho', 'Periscic'];
// console.log(players1Final);

// // 5.
// // const team1 = game.odds.team1;
// // console.log(team1);

// const {odds: {team1, x: draw, team2}} = game;
// console.log(team1, draw, team2);

// // 6.
// const printGoals = function(...players) {
//   console.log(`${players.length} goals were scored`);
//   console.log(`players who scored ${players}`);
// }

// printGoals('Davies', 'Muller', 'Lewandowski');
// printGoals('Brax', 'Mom');
// printGoals(...game.scored);

// // 7.
// team1 < team2 && console.log('Team 1 is more likely to win');
// team1 > team2 && console.log('Team 2 is more likely to win');
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

// ---------------------------------------------------------

// // WORKING WITH STRINGS Part 3

// // Split and Join
// console.log('a+very+nice+string'.split('+'));
// console.log('Brax McClellan'.split(' '));

// const [firstName, lastName] = 'Brax McClellan'.split(' ');
// console.log(firstName, lastName);

// const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
// console.log(newName);

// const capitalizeName = function(name) {
//   const names = name.split(' ');
//   console.log(names);

//   const namesUpper = [];
//   for(const n of names) {
//     // namesUpper.push(n[0].toUpperCase() + n.slice(1))
//     namesUpper.push(n.replace(n[0], n[0].toUpperCase()))
//   }
//   console.log(namesUpper.join(' '));
// }
// capitalizeName('jessica ann smith davis');
// capitalizeName('brax mcclellan')

// //Padding
// const message = 'Go to gate 23';
// console.log(message.padStart(25, '$')); // first arg is string length, next value is the char that it uses for padding
// console.log(message.padEnd(25, '$')); 
// console.log('Brax'.padStart(20, '.'));
// console.log('Brax'. padStart(20, '.').padEnd(30, '.')); // pads it to 20 char count and then it does 10 after the string for padEnd difference

// const maskCreditCard = function(number) {
//   const str = number + '';
//   const last = str.slice(-4)
//   console.log(last.padStart(16, '*'));
// }
// maskCreditCard(1234123412341234);
// maskCreditCard('1234123412341234');

// // Repeat
// const message2 = 'Bad weather... All departures delayed...';
// console.log(message2.repeat(5));

// const planesInLine = function(n) {
//   console.log(`There are ${n} planes in line ${'✈'.repeat(n)}`);
// }
// planesInLine(5);
// planesInLine(2);
// planesInLine(10);

// ---------------------------------------------------------

// // WORKING WITH STRINGS Part 2

// const airline = 'TAP Air Portugal';
// console.log(airline.toLowerCase());
// console.log(airline.toUpperCase());

// //Fix capitalization in name
// const passenger = 'bRaXtoN'; // should be Braxton
// const passengerLower = passenger.toLowerCase();
// const passengerCorrect = passengerLower[0].toUpperCase() + passengerLower.slice(1)
// console.log(passengerCorrect);

// function fixName(name) {
//   let lower = name.toLowerCase();
//   let fixed = name[0].toUpperCase() + lower.slice(1);
//   console.log(fixed);
// }
// fixName('braXtoN')
// fixName('dianA')
// fixName('mCcLeLlAn')

// // Comparing email
// const email = 'hello@brax.io';
// const loginEmail = '   Hello@Brax.Io \n';

// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim() // takes out spaces or dead space

// const fixedEmail = loginEmail.toLowerCase().trim();

// console.log(fixedEmail);
// console.log(email === fixedEmail);

// // replacing in strings
// const priceGB = '288,97£';
// const priceUS = priceGB.replace('£', '$').replace(',', '.');
// console.log(priceUS);

// const announcement = 'All passengers come to boarding door 23, boarding door 23!'

// console.log(announcement.replace('door', 'gate'));
// // console.log(announcement.replaceAll('door', 'gate'));
// console.log(announcement.replace(/door/g, 'gate')); // this uses general expression, the g stands for 'global'

// // Booleans
// const plane = 'Airbus A320neo';
// console.log(plane.includes('A320')); // true
// console.log(plane.includes('Boeing')); // false
// console.log(plane.startsWith('Z')); // false
// console.log(plane.startsWith('Air')); // true

// if(plane.startsWith('Airbus') && plane.endsWith('neo')) {
//   console.log('Part of the NEW Airbus family');
// }

// // Practice exercise
// const checkBags = function(items) {
//   const baggage = items.toLowerCase();
//   if(baggage.includes('knife') || baggage.includes('gun')) {
//     console.log('You cannot fly sorry!');
//   } else {
//     console.log('You may board the plane');
//   }
// }
// checkBags('I have a laptop, some food, and a pocket KNIFE');
// checkBags('I have some socks and a cemera');
// checkBags('Got some snacks and a gun for protection');

// ----------------------------------------------------------
// // WORKING WITH STRINGS Part 1

// const airline = 'TAP Air Portugal';
// const plane = 'A320';

// // these work the same way
// console.log(plane[0]);
// console.log('B737'[0]);

// console.log(airline.length);
// console.log('B737'.length);

// console.log(airline.indexOf('r'));
// console.log(airline.lastIndexOf('r'));
// console.log(airline.indexOf('Air'));

// console.log(airline.slice(4));
// console.log(airline.slice(4, 7));

// console.log(airline.slice(0, airline.indexOf(' ')));

// console.log(airline.slice(airline.lastIndexOf(' ') + 1)); // adding +1 it gets rid of the space in front

// console.log(airline.slice(-3)); // this starts and the end and counts in

// console.log(airline.slice(1, -1)); // this takes off the first and last letter

// const checkMiddleSeat = function(seat) {
//   // 11A, 11B, 11C -- 11D, 11E, 11F, B and E are middle seats
//   const s = seat.slice(seat.indexOf(-1));
//   if(s == 'B' || s == 'E') {
//     console.log('You got a middle seat!');
//   } else {
//     console.log('You got lucky');
//   }
// }
// checkMiddleSeat('11B');
// checkMiddleSeat('23C');
// checkMiddleSeat('7E');

// // considered an object
// console.log(new String('Brax'));
// console.log(typeof new String('Brax'));

// // makes it a string again when methods are called on it
// console.log(new String('Brax'));
// console.log(typeof new String('Braxt').slice(-1));
// console.log(typeof new String('Brax').toLowerCase());

// ----------------------------------------------------------

// // MAP ITERATION

// const question = new Map([
//   ['queston', 'What is the best programming language in the world?'],
//   [1, 'C'],
//   [2, 'Java'],
//   [3, 'Javascript'],
//   ['Correct', 3],
//   [true, 'Correct!'],
//   [false, 'Try Again!']
// ]);
// console.log(question);

// // convert object to map
// console.log(Object.entries(openingHours));
// const hoursMap = new Map(Object.entries(openingHours));
// console.log(hoursMap);

// console.log(question);
// for(const [key, value] of question) {
//   if(typeof key === 'number') console.log(`Answer ${key}: ${value}`);
// }
// // const answer = Number(prompt('Your answer'))
// const answer = 3;
// // console.log(answer);

// // checks to see if it's correct, then pulls true or false value
// console.log(question.get(question.get('Correct') === answer))

// // convert map to array
// console.log([...question]);
// console.log(question.entries());
// console.log(...question.keys());
// console.log(...question.values());

// -------------------------------------------------------

// // MAPS: fundamentals
// // uses two arguments, key & value 
// const rest = new Map();
// rest.set('name', 'Classico Italiano');
// rest.set(1, 'Firenze, Italy');
// rest.set(2, 'Lisbon, Portugal');
// rest.set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic']).set('open', 8).set('close', 21).set(true, 'We are open!').set(false, 'We are closed!')
// console.log(rest);
// console.log(rest.get(true));
// console.log(rest.get(1));

// const time = 20;
// console.log(rest.get(time >= rest.get('open') && time < rest.get('close')));

// console.log(rest.has('categories'));
// rest.delete(2);
// console.log(rest);
// console.log(rest.size);
// rest.clear();
// // console.log(rest); Clears the entire map

// // rest.set([1,2], 'Test') you can use an array as a key
// const arr = [1, 2];
// rest.set(arr, 'test')
// rest.set(document.querySelector('h1'), 'Heading')
// console.log(rest);
// console.log(rest.get(arr));

// --------------------------------------------------------

// // SETS
// // will not show duplicates, and sets are iterable
// // there are no index's in sets, cant pull data from set
// const ordersSet = new Set(['Pasta', 'Pizza', 'Pizza', 'Risotto', 'Pasta', 'Pizza']);
// console.log(ordersSet);
// console.log(ordersSet.size);
// console.log(ordersSet.has('Pizza'));
// console.log(ordersSet.has('Bread'));
// ordersSet.add('Garlic Bread')
// ordersSet.add('Garlic Bread')
// // ordersSet.clear(ordersSet) THIS WILL CLEAR THE ENTIRE SET
// ordersSet.delete('Risotto')
// console.log(ordersSet);

// for(const loop of ordersSet) console.log(loop);

// console.log(new Set('Brax'));

// // example of turning array into a set to get rid of duplicates
// const staff = ['Chef', 'Waiter', 'Chef', 'Host', 'Manager', 'Host', 'Waiter'];
// const staffUnique = [...new Set(staff)];
// console.log(staffUnique);
// console.log(new Set(['Chef', 'Waiter', 'Chef', 'Host', 'Manager', 'Host', 'Waiter']).size)

// console.log(new Set('Braxton').size);


// ----------------------------------------------------------

// const properties = Object.keys(openingHours);
// console.log(properties);

// let openStr = `we are open ${properties.length} days a week on: `;
// for(const day of properties) {
//   openStr += `${day}, `
// }
// console.log(openStr);

// // Property Values

// const values = Object.values(openingHours);
// console.log(values);

// // Entire Object
// const entries = Object.entries(openingHours);
// console.log(entries);

// for(const [day, {open, close}] of entries) {
//   console.log(`On ${day} we open at ${open} and close at ${close}`);
// }

// for(const day of Object.keys(openingHours)) {
//   console.log(day);
// }

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

// REST
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

// // CODING CHALLENGE 4\

// making snake_case camelCase

// underscore_case
//  first_name
// Some_Variable
//   calculate_AGE
// delayed_departure


document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));


document.querySelector('button').addEventListener('click', function() {
  const text = document.querySelector('textarea').value;
  const rows = text.split('\n');

  for(const [i, row] of rows.entries()) {
    const [first, second] = row.trim().toLowerCase().split('_')
    const output = `${first}${second.replace(second[0], second[0].toUpperCase())}`;
    console.log(`${output.padEnd(20)} ${'#'.repeat(i + 1)}`);
  }
})

// // CODING CHALLENGE 3

// const gameEvents = new Map([
//   [17, 'Goal'],
//   [36, 'Substitution'],
//   [47, 'Goal'],
//   [61, 'Substitution'],
//   [64, 'Yellow Card'],
//   [69, 'Red Card'],
//   [70, 'Substitution'],
//   [72, 'Substitution'],
//   [76, 'Goal'],
//   [80, 'Goal'],
//   [92, 'Yellow Card']
// ])

// // 1.
// const events = [...new Set(gameEvents.values())];
// console.log(events);

// // 2.
// gameEvents.delete(64)
// console.log(gameEvents);

// // 3.
// const time = [...gameEvents.keys()].pop(); // .pop() returns last of array
// console.log(time);
// console.log(`An event happened, on average, ${time / gameEvents.size} every minutes`);

// // 4.
// for(const [key, value] of gameEvents) {
//   if(key < 45) {
//     console.log(`[FIRST HALF] ${key}: ${value}`);
//   } else {
//     console.log(`[SECOND HALF] ${key}: ${value}`);
//   }
// }

// // CODING CHALLENGE 2

// // 1.
// for(const [i, player] of game.scored.entries()) console.log(`Goal ${i + 1}: ${player}`);

// // 2.
// const odds = game.odds;
// let average = 0;
// for(const result in odds) {
//   console.log(result, odds[result]);
//   average += odds[result]
// }
// average /= 3
// console.log(average);

// // another way
// let avg = 0;
// for(const res of Object.values(game.odds)) {
//   avg += res;
//   console.log(avg);
// }
// avg /= 3;
// console.log(avg);

// // 3.
// for(const i in odds) {
//   console.log(i, odds[i]);
//   if(i === 'team1' || i === 'team2') {
//     console.log(`Odd of victory ${game[i]}: ${odds[i]}`);
//   } else {
//     console.log(`Odd of draw: ${odds[i]}`);
//   }
// }

// // Bonus
// let scorers = {};
// for(const player of game.scored) {
//   console.log(scorers);
//   scorers[player] ? scorers[player]++ : (scorers[player] = 1);
//   console.log(`${player}: ${scorers[player]}`);
// }

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
/* week 5 - task 001
Multiple of index
Return a new array consisting of elements which are multiple 
of their own index in input array (length > 1).
Some cases:
[22, -6, 32, 82, 9, 25] =>  [-6, 32, 25]
[68, -1, 1, -7, 10, 10] => [-1, 10]
[-56,-85,72,-26,-14,76,-27,72,35,-21,-67,87,0,21,59,27,-92,68] => [-85, 72, 0, 68]
*/
// TODOD:: redo
const multipleOfIndex = array => array.map((a, b) => (Number.isInteger(a / b) || a === 0 ? a : null)).filter(x => x != null);
const multipleOfIndexV2 = a => a.filter((v, i) => v % i === 0);
// console.log(multipleOfIndex([22, -6, 32, 82, 9, 25]));
// console.log(multipleOfIndex([68, -1, 1, -7, 10, 10]));
// console.log(multipleOfIndex([-56, -85, 72, -26, -14, 76, -27, 72, 35, -21, -67, 87, 0, 21, 59, 27, -92, 68]));
// [-85, 72, 0, 68]);

/* week 5 - task 002
Are the numbers in order?
In this Kata, your function receives an array of integers as input. Your task is to determine whether the numbers are in ascending order. An array is said to be in ascending order if there are no two adjacent integers where the left integer exceeds the right integer in value.
For the purposes of this Kata, you may assume that all inputs are valid, i.e. non-empty arrays containing only integers.
Note that an array of 1 integer is automatically considered to be sorted in ascending order since all (zero) adjacent pairs of integers satisfy the condition that the left integer does not exceed the right integer in value. An empty list is considered a degenerate case and therefore will not be tested in this Kata - feel free to raise an Issue if you see such a list being tested.
For example:
inAscOrder([1,2,4,7,19]); // returns true
inAscOrder([1,2,3,4,5]); // returns true
inAscOrder([1,6,10,18,2,4,20]); // returns false
inAscOrder([9,8,7,6,5,4,3,2,1]); // returns false because the numbers are in DESCENDING order
N.B. If your solution passes all fixed tests but fails at the random tests, make sure you aren't mutating the input array.
*/

const inAscOrder = arr => {
  let isValid = [];
  arr.map((v, i, arr) => {
    if (v > arr[i + 1]) {
      isValid.push(false);
    } else {
      isValid.push(true);
    }
  });
  return !isValid.includes(false);
};
const inAscOrderV2 = arr => arr.join('') === arr.sort((a, b) => a - b).join('');
//console.log(inAscOrder([1, 20, 4, 7, 19]));

/* week 5 - task 003
The first input array is the key to the correct answers to an exam, like ["a", "a", "b", "d"]. The second one contains a student's submitted answers.
The two arrays are not empty and are the same length. 
Return the score for this array of answers, giving +4 for each correct answer, -1 
for each incorrect answer, 
and +0 for each blank answer, represented as an empty string (in C the space character is used).
If the score < 0, return 0.
For example:
checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]) → 6
checkExam(["a", "a", "c", "b"], ["a", "a", "b",  ""]) → 7
checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"]) → 16
checkExam(["b", "c", "b", "a"], ["",  "a", "a", "c"]) → 0
*/
const checkExam = (array1, array2) => {
  let score = 0;
  array1.forEach((a, b) => {
    if (array2[b]) {
      a === array2[b] ? (score += 4) : score--;
    }
  });
  return score < 0 ? 0 : score;
};
//console.log(checkExam(['a', 'a', 'b', 'b'], ['a', 'c', 'b', 'd']));
// console.log(checkExam(['a', 'a', 'c', 'b'], ['a', 'a', 'b', '']));
// console.log(checkExam(['a', 'a', 'b', 'c'], ['a', 'a', 'b', 'c']));
// console.log(checkExam(['b', 'c', 'b', 'a'], ['', 'a', 'a', 'c']));

/* week 5 - task 004
Who ate the cookie?
For this problem you must create a program that says who ate the last cookie. If the input is a string then "Zach" ate the cookie. If the input is a float or an int then "Monica" ate the cookie. If the input is anything else "the dog" ate the cookie. The way to return the statement is: "Who ate the last cookie? It was (name)!"
Ex: Input = "hi" : Output = "Who ate the last cookie? I
t was Zach! (The reason you return Zach is because the input is a string)
Note: Make sure you return the correct message with correct spaces and punctuation.
Please leave feedback for this kata. Cheers!
*/
const cookie = x => {
  let str = typeof x === 'string' ? 'Zach' : typeof x === 'number' ? 'Monica' : 'the dog';
  return `Who ate the last cookie? It was ${str}!`;
};

/* week 5 - task 005
Multiplication table for number
Your goal is to return multiplication table for number that is always an integer from 1 to 10.
For example, a multiplication table (string) for number == 5 looks like below:

1 * 5 = 5
2 * 5 = 10
3 * 5 = 15
4 * 5 = 20
5 * 5 = 25
6 * 5 = 30
7 * 5 = 35
8 * 5 = 40
9 * 5 = 45
10 * 5 = 50
P. S. You can use \n in string to jump to the next line.

Note: newlines should be added between rows, but there should be no trailing newline at the end.
*/
const multiTable = number => {
  const max = 10;
  let str = '';
  str += [...Array(max).keys()].map(a => `${a + 1} * ${number} = ${(a + 1) * number}${a + 1 !== max ? '\n' : ''}`).join('');
  return str;
};
// console.log(multiTable(5));
// console.log(multiTable(5), '1 * 5 = 5\n2 * 5 = 10\n3 * 5 = 15\n4 * 5 = 20\n5 * 5 = 25\n6 * 5 = 30\n7 * 5 = 35\n8 * 5 = 40\n9 * 5 = 45\n10 * 5 = 50');
//console.log(multiTable(1), '1 * 1 = 1\n2 * 1 = 2\n3 * 1 = 3\n4 * 1 = 4\n5 * 1 = 5\n6 * 1 = 6\n7 * 1 = 7\n8 * 1 = 8\n9 * 1 = 9\n10 * 1 = 10');

/* week 5 - task 006
Calculate Price Excluding VAT
Write a function that calculates the original product price, without VAT.
Example
If a product price is 200.00 and VAT is 15%, then the final product price 
(with VAT) is: 200.00 + 15% = 230.00

Thus, if your function receives 230.00 as input, it should return 200.00

Notes:
VAT is always 15% for the purposes of this Kata.
Round the result to 2 decimal places.
If null value given then return -1
*/
// .toFixed(2)
//return price without vat
//const excludingVatPrice = price => (price ? price + (price / 100) * 15 : 0);
const excludingVatPrice = price => (price !== null ? Number((price / 1.15).toFixed(2)) : -1);
//console.log(excludingVatPrice(230)); // 200
//console.log(excludingVatPrice(123)); // 106.96

/* week 5 - task 006
Wolves have been reintroduced to Great Britain. You are a sheep farmer, and are now plagued by wolves which pretend to be sheep. Fortunately, you are good at spotting them.
Warn the sheep in front of the wolf that it is about to be eaten. Remember that you are standing at the front of the queue which is at the end of the array:
[sheep, sheep, sheep, sheep, sheep, wolf, sheep, sheep]      (YOU ARE HERE AT THE FRONT OF THE QUEUE)
   7      6      5      4      3            2      1
If the wolf is the closest animal to you, return "Pls go away and stop eating my sheep". Otherwise, return "Oi! Sheep number N! You are about to be eaten by a wolf!" where N is the sheep's position in the queue.
Note: there will always be exactly one wolf in the array.
Examples
Input: ["sheep", "sheep", "sheep", "wolf", "sheep"]
Output: "Oi! Sheep number 1! You are about to be eaten by a wolf!"
Input: ["sheep", "sheep", "wolf"]
Output: "Pls go away and stop eating my sheep"
*/

const warnTheSheep = queue => {
  const w = 'wolf';
  let sheepNum = null;
  queue
    .reverse((a, i) => a - i)
    .filter((a, i) => {
      a === w ? (sheepNum = i) : a;
    });
  return queue[0] === w ? 'Pls go away and stop eating my sheep' : `Oi! Sheep number ${sheepNum}! You are about to be eaten by a wolf!`;
};

// console.log(warnTheSheep(['sheep', 'sheep', 'sheep', 'sheep', 'sheep', 'wolf', 'sheep', 'sheep']), 'Oi! Sheep number 2! You are about to be eaten by a wolf!');
//console.log(warnTheSheep(['sheep', 'wolf', 'sheep', 'sheep', 'sheep', 'sheep', 'sheep']), 'Oi! Sheep number 5! You are about to be eaten by a wolf!');
//console.log(warnTheSheep(['wolf', 'sheep', 'sheep', 'sheep', 'sheep', 'sheep', 'sheep']), 'Oi! Sheep number 6! You are about to be eaten by a wolf!');
//console.log(warnTheSheep(['sheep', 'wolf', 'sheep']), 'Oi! Sheep number 1! You are about to be eaten by a wolf!');
//console.log(warnTheSheep(['sheep', 'sheep', 'wolf']), 'Pls go away and stop eating my sheep');

/* week 5 - task 007
How many stairs will Suzuki climb in 20 years?
Suzuki is a monk who climbs a large staircase to the monastery as part of a ritual. Some days he climbs more stairs than others depending on the number of students he must train in the morning. He is curious how many stairs might be climbed over the next 20 years and has spent a year marking down his daily progress.
The sum of all the stairs logged in a year will be used for estimating the number he might climb in 20.
20_year_estimate = one_year_total * 20
You will receive the following data structure representing the stairs Suzuki logged in a year. You will have all data for the entire year so regardless of how it is logged the problem should be simple to solve.
stairs = [sunday,monday,tuesday,wednesday,thursday,friday,saturday]
Make sure your solution takes into account all of the nesting within the stairs array.
Each weekday in the stairs array is an array.
sunday = [6737, 7244, 5776, 9826, 7057, 9247, 5842, 5484, 6543, 5153, 6832, 8274, 7148, 6152, 5940, 8040, 9174, 7555, 7682, 5252, 8793, 8837, 7320, 8478, 6063, 5751, 9716, 5085, 7315, 7859, 6628, 5425, 6331, 7097, 6249, 8381, 5936, 8496, 6934, 8347, 7036, 6421, 6510, 5821, 8602, 5312, 7836, 8032, 9871, 5990, 6309, 7825]
Your function should return the 20 year estimate of the stairs climbed using the formula above.
*/
let sunday = [6737, 7244, 5776, 9826, 7057, 9247, 5842, 5484, 6543, 5153, 6832, 8274, 7148, 6152, 5940, 8040, 9174, 7555, 7682, 5252, 8793, 8837, 7320, 8478, 6063, 5751, 9716, 5085, 7315, 7859, 6628, 5425, 6331, 7097, 6249, 8381, 5936, 8496, 6934, 8347, 7036, 6421, 6510, 5821, 8602, 5312, 7836, 8032, 9871, 5990, 6309, 7825],
  monday = [9175, 7883, 7596, 8635, 9274, 9675, 5603, 6863, 6442, 9500, 7468, 9719, 6648, 8180, 7944, 5190, 6209, 7175, 5984, 9737, 5548, 6803, 9254, 5932, 7360, 9221, 5702, 5252, 7041, 7287, 5185, 9139, 7187, 8855, 9310, 9105, 9769, 9679, 7842, 7466, 7321, 6785, 8770, 8108, 7985, 5186, 9021, 9098, 6099, 5828, 7217, 9387],
  tuesday = [8646, 6945, 6364, 9563, 5627, 5068, 9157, 9439, 5681, 8674, 6379, 8292, 7552, 5370, 7579, 9851, 8520, 5881, 7138, 7890, 6016, 5630, 5985, 9758, 8415, 7313, 7761, 9853, 7937, 9268, 7888, 6589, 9366, 9867, 5093, 6684, 8793, 8116, 8493, 5265, 5815, 7191, 9515, 7825, 9508, 6878, 7180, 8756, 5717, 7555, 9447, 7703],
  wednesday = [6353, 9605, 5464, 9752, 9915, 7446, 9419, 6520, 7438, 6512, 7102, 5047, 6601, 8303, 9118, 5093, 8463, 7116, 7378, 9738, 9998, 7125, 6445, 6031, 8710, 5182, 9142, 9415, 9710, 7342, 9425, 7927, 9030, 7742, 8394, 9652, 5783, 7698, 9492, 6973, 6531, 7698, 8994, 8058, 6406, 5738, 7500, 8357, 7378, 9598, 5405, 9493],
  thursday = [6149, 6439, 9899, 5897, 8589, 7627, 6348, 9625, 9490, 5502, 5723, 8197, 9866, 6609, 6308, 7163, 9726, 7222, 7549, 6203, 5876, 8836, 6442, 6752, 8695, 8402, 9638, 9925, 5508, 8636, 5226, 9941, 8936, 5047, 6445, 8063, 6083, 7383, 7548, 5066, 7107, 6911, 9302, 5202, 7487, 5593, 8620, 8858, 5360, 6638, 8012, 8701],
  friday = [5000, 5642, 9143, 7731, 8477, 8000, 7411, 8813, 8288, 5637, 6244, 6589, 6362, 6200, 6781, 8371, 7082, 5348, 8842, 9513, 5896, 6628, 8164, 8473, 5663, 9501, 9177, 8384, 8229, 8781, 9160, 6955, 9407, 7443, 8934, 8072, 8942, 6859, 5617, 5078, 8910, 6732, 9848, 8951, 9407, 6699, 9842, 7455, 8720, 5725, 6960, 5127],
  saturday = [5448, 8041, 6573, 8104, 6208, 5912, 7927, 8909, 7000, 5059, 6412, 6354, 8943, 5460, 9979, 5379, 8501, 6831, 7022, 7575, 5828, 5354, 5115, 9625, 7795, 7003, 5524, 9870, 6591, 8616, 5163, 6656, 8150, 8826, 6875, 5242, 9585, 9649, 9838, 7150, 6567, 8524, 7613, 7809, 5562, 7799, 7179, 5184, 7960, 9455, 5633, 9085];
var stairs = [sunday, monday, tuesday, wednesday, thursday, friday, saturday];
const stairsIn20 = s => stairs.map((a, b) => a.reduce((a, b) => a + b)).reduce((a, b) => a + b) * 20;
// console.log(stairsIn20(stairs), 54636040);

/* week 5 - task 008
Total amount of points
Our football team finished the championship. The result of each match look like "x:y". Results of all matches are recorded in the collection.
For example: ["3:1", "2:2", "0:1", ...]
Write a function that takes such collection and counts the points of our team in the championship. Rules for counting points for each match:
if x>y - 3 points
if x<y - 0 point
if x=y - 1 point
Notes:
there are 10 matches in the championship
0 <= x <= 4
0 <= y <= 4
*/

const points = games => games.map(v => v.split(':').reduce((a, b) => (a > b ? 3 : a === b ? 1 : 0))).reduce((a, b) => Number(a + b));
//console.log(points(['1:0', '2:0', '3:0', '4:0', '2:1', '3:1', '4:1', '3:2', '4:2', '4:3']));
// console.log(points(['1:1', '2:2', '3:3', '4:4', '2:2', '3:3', '4:4', '3:3', '4:4', '4:4']));

/* week 5 - task 009
Tip Calculator
Complete the function, which calculates how much you need to tip based on the total amount of the bill and the service.
You need to consider the following ratings:
Terrible: tip 0%
Poor: tip 5%
Good: tip 10%
Great: tip 15%
Excellent: tip 20%
The rating is case insensitive (so "great" = "GREAT"). If an unrecognised rating is received, then you need to return:
"Rating not recognised" in Javascript, Python and Ruby...
...or null in Java
...or -1 in C#
Because you're a nice person, you always round up the tip, regardless of the service.
*/
const calculateTip = (amount, rating) => {
  const tips = ['Terrible', 'Poor', 'Good', 'Great', 'Excellent'],
    err = 'Rating not recognised',
    tipAmount = 5;
  let selected = null;
  tips.filter((v, i) => {
    if (v.match(new RegExp(rating, 'gi'))) {
      selected = i;
    }
  });
  return Number.isInteger(selected) ? Math.ceil(amount * (selected / 100) * tipAmount) : err;
};
//console.log(calculateTip(26.95, 'hi'), 0);

/* week 5 - task 010
Find Multiples of a Number
In this simple exercise, you will build a program that takes a value, integer , and returns a list of its multiples up to another value, limit . If limit is a multiple of integer, it should be included as well. There will only ever be positive integers passed into the function, not consisting of 0. The limit will always be higher than the base.
For example, if the parameters passed are (2, 6), the function should return [2, 4, 6] as 2, 4, and 6 are the multiples of 2 up to 6.
If you can, try writing it in only one line of code.
*/
const findMultiples = (integer, limit) => {
  let arr = [];
  for (let i = 1; integer * i <= limit; i++) {
    arr.push(integer * i);
  }
  return arr;
};
//console.log(findMultiples(5, 25)); // [5, 10, 15, 20, 25]
//console.log(findMultiples(1, 2), [1, 2]);
//console.log(findMultiples(5, 7), [5]);
//console.log(findMultiples(4, 27), [4, 8, 12, 16, 20, 24]);
//console.log(findMultiples(11, 54), [11, 22, 33, 44]);

/* week 5 - task 011
Triple Trouble
Triple Trouble
Create a function that will return a string that combines all of the letters of the three inputed strings in groups. Taking the first letter of all of the inputs and grouping them next to each other. Do this for every letter, see example below!
E.g. Input: "aa", "bb" , "cc" => Output: "abcabc"
Note: You can expect all of the inputs to be the same length.
*/
// TODOD:: redo with easier js default function
const tripleTrouble = (one, two, three) => {
  let all = (one + two + three).split('');
  return all
    .map((v, i) => {
      return i < one.length ? v + all[one.length + i] + all[one.length + two.length + i] : null;
    })
    .filter(x => x != null)
    .join('');
};
const tripleTrouble2 = (one, two, three) => {
  let str = '';
  for (var i = 0; i < one.length; i++) {
    str += one[i] + two[i] + three[i];
  }
  return str;
};
//console.log(tripleTrouble2('this', 'test', 'lock'), 'ttlheoiscstk');
//console.log(tripleTrouble('aa', 'bb', 'cc'), 'abcabc');
//console.log(tripleTrouble('Bm', 'aa', 'tn'), 'Batman');
//console.log(tripleTrouble('LLh', 'euo', 'xtr'), 'LexLuthor');

/* week 5 - task 012
Rock Paper Scissors
Let's play! You have to return which player won! In case of a draw return Draw!.
Examples:
rps('scissors','paper') // Player 1 won!
rps('scissors','rock') // Player 2 won!
rps('paper','paper') // Draw!
*/
const rps = (p1, p2) => {
  const rule = ['rock', 'scissors', 'paper'],
    a = rule.indexOf(p1),
    b = rule.indexOf(p2),
    pl1 = 'Player 1 won!',
    pl2 = 'Player 2 won!',
    d = 'Draw!';
  str = String(a) + String(b);
  return a === b ? d : a < b || str === '20' ? (str !== '02' ? pl1 : pl2) : pl2;
};
const rps2 = (p1, p2) => {
  if (p1 === p2) return 'Draw!';
  var rules = { rock: 'scissors', paper: 'rock', scissors: 'paper' };
  if (p2 === rules[p1]) {
    return 'Player 1 won!';
  } else {
    return 'Player 2 won!';
  }
};
//console.log(rps('rock', 'scissors'));
//console.log(rps('scissors', 'paper'));
//console.log(rps('paper', 'rock'));
//console.log(rps('scissors', 'rock'));
//console.log(rps('paper', 'scissors'));
//console.log(rps('rock', 'paper'));
//console.log(rps('rock', 'rock'), 'Draw!');
//console.log(rps('scissors', 'scissors'), 'Draw!');
//console.log(rps('paper', 'paper'), 'Draw!');

/* week 5 - task 012

Drink about
Kids drink toddy.
Teens drink coke.
Young adults drink beer.
Adults drink whisky.
Make a function that receive age, and return what they drink.
Rules:
Children under 14 old.
Teens under 18 old.
Young under 21 old.
Adults have 21 or more.
Examples: (Input --> Output)

13 --> "drink toddy"
17 --> "drink coke"
18 --> "drink beer"
20 --> "drink beer"
30 --> "drink whisky"
*/
const peopleWithAgeDrink = old => {
  const rule = [
      { drink: 'toddy', age: [0, 14] },
      { drink: 'coke', age: [14, 18] },
      { drink: 'beer', age: [18, 21] },
      { drink: 'whisky', age: [21] }
    ],
    offer = rule.filter(v => (old >= v.age[0] && old < v.age[1]) || !v.age[1])[0];
  let [txt] = Object.keys(offer);
  return `${txt} ${offer.drink}`;
};
// console.log(peopleWithAgeDrink(23));

/* week 5 - task 013
Character Frequency
Description
Welcome, Warrior! In this kata, you will get a message and you will need to get the frequency of each and every character!
Explanation
Your function will be called char_freq/charFreq/CharFreq and you will get passed a string, you will then return a dictionary (object in JavaScript) with as keys the characters, and as values how many times that character is in the string. You can assume you will be given valid input.
Example
charFreq("I like cats") // Returns {'a': 1, ' ': 2, 'c': 1, 'e': 1, 'I': 1, 'k': 1, 'l': 1, 'i': 1, 's': 1, 't': 1}
*/
const charFreq = message => {
  return message
    .split('')
    .sort((a, b) => a - b)
    .reduce((acc, curr) => {
      acc[curr] = (acc[curr] || 0) + 1;
      return acc;
    }, {});
};

// console.log(charFreq('How can mirrors be real when our eyes arent real?'));
//, { a: 1, ' ': 2, c: 1, e: 1, I: 1, k: 1, l: 1, i: 1, s: 1, t: 1 }

/**** EXTRAAAA */ //
/* week 5 - Formatting a number as price
Character Frequency
Your objective is to add formatting to a plain number to display it as price.
The function should return a string like this:
var price = numberToPrice(13253.5123);
console.log(price); // 13,253.51
Numbers should use the standard comma for every 3 numbers and dot to separate the cents, cents need to be truncated to 2 decimals, in the case that the decimal part of the number is 1 character long or none you should add 0's so that the result will always have 2 decimal characters, the function will also evaluate negative numbers.
function should return a string 'NaN' if the input is not a valid number
*/
//[\d]{2}[\d]{2,3}
const numberToPrice = number => Math.floor(number / 1000).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
console.log(numberToPrice(1500.129));

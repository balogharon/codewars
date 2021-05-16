/* week 4 - task 001
Number of People in the Bus
Number of people in the bus
There is a bus moving in the city, and it takes and drop some people in each bus stop.
You are provided with a list (or array) of integer arrays (or tuples). Each integer array has two items which represent number of people get into bus (The first item) and number of people get off the bus (The second item) in a bus stop.
Your task is to return number of people who are still in the bus after the last bus station (after the last array). Even though it is the last bus stop, the bus is not empty and some people are still in the bus, and they are probably sleeping there :D
Take a look on the test cases.
Please keep in mind that the test cases ensure that the number of people in the bus is always >= 0. So the return integer can't be negative.
The second value in the first integer array is 0, since the bus is empty in the first bus stop.
// TODO:: újracsinálni
*/

const number = busStops => {
  let on = 0,
    off = 0;
  busStops.forEach(people => {
    on += people[0];
    off += people[1];
  });
  return on - off;
};
/*console.log(
  number([
    [10, 0],
    [3, 5],
    [5, 8]
  ]),
  5
);*/

/* week 4 - task 002
Determine offspring sex based on genes XX and XY chromosomes
The male gametes or sperm cells in humans and other mammals are heterogametic and contain one of two types of sex chromosomes. They are either X or Y. The female gametes or eggs however, contain only the X sex chromosome and are homogametic.
The sperm cell determines the sex of an individual in this case. If a sperm cell containing an X chromosome fertilizes an egg, the resulting zygote will be XX or female. If the sperm cell contains a Y chromosome, then the resulting zygote will be XY or male.
Determine if the sex of the offspring will be male or female based on the X or Y chromosome present in the male's sperm.
If the sperm contains the X chromosome, return 
"Congratulations! You're going to have a daughter."; If the sperm contains the Y chromosome, return "Congratulations! You're going to have a son.";
*/
const chromosomeCheck = sperm => {
  let msg = "Congratulations! You're going to have a ";
  return sperm.includes('Y') ? msg + 'son.' : msg + 'daughter.';
};
// console.log(chromosomeCheck('XY'));

/* week 4 - task 003
Merge two sorted arrays into one
You are given two sorted arrays that both only contain integers. Your task is to find a way to merge them into a single one, sorted in asc order. Complete the function mergeArrays(arr1, arr2), where arr1 and arr2 are the original sorted arrays.
You don't need to worry about validation, since arr1 and arr2 must be arrays with 0 or more Integers. If both arr1 and arr2 are empty, then just return an empty array.
Note: arr1 and arr2 may be sorted in different orders. Also arr1 and arr2 may have same integers. Remove duplicated in the returned result.

Examples
arr1 = [1, 2, 3, 4, 5];
arr2 = [6, 7, 8, 9, 10];
mergeArrays(arr1, arr2);  // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

arr3 = [1, 3, 5, 7, 9];
arr4 = [10, 8, 6, 4, 2];
mergeArrays(arr3, arr4);  // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

arr5 = [1, 3, 5, 7, 9, 11, 12];
arr6 = [1, 2, 3, 4, 5, 10, 12];
mergeArrays(arr5, arr6);  // [1, 2, 3, 4, 5, 7, 9, 10, 11, 12]
*/
const mergeArrays = (arr1, arr2) => [...new Set([...arr1, ...arr2].sort((a, b) => a - b))];
// console.log(mergeArrays([1, 3, 5, 7, 9, 11, 12], [1, 2, 3, 4, 5, 10, 12]));

/* week 4 - task 004
Cat years, Dog years

Kata Task
I have a cat and a dog.
I got them at the same time as kitten/puppy. That was humanYears years ago.
Return their respective ages now as [humanYears,catYears,dogYears]

NOTES:

humanYears >= 1
humanYears are whole numbers only
Cat Years
15 cat years for first year
+9 cat years for second year
+4 cat years for each year after that
Dog Years
15 dog years for first year
+9 dog years for second year
+5 dog years for each year after that
*/
const humanYearsCatYearsDogYears = humanYears => {
  let y = [15, 9],
    sum = 0,
    cat = 4,
    dog = 5,
    arr = [...Array(humanYears).keys()];
  arr.forEach(num => {
    if (num === 0 || num === 1) {
      sum += y[num];
    }
  });
  return [humanYears, sum + cat * (arr.length - 2), sum + dog * (arr.length - 2)];
};
// console.log(humanYearsCatYearsDogYears(1));

/* week 4 - task 005
Capitalization and Mutability
Your coworker was supposed to write a simple helper function to capitalize a string (that contains a single word) before they went on vacation.
Unfortunately, they have now left and the code they gave you doesn't work. Fix the helper function they wrote so that it works as intended (i.e. make the first character in the string "word" upper case).
Don't worry about numbers, special characters, or non-string types being passed to the function. The string lengths will be from 1 character up to 10 characters, but will never be empty.
*/

const capitalizeWord = word => word.charAt(0).toUpperCase() + word.slice(1);
// console.log(capitalizeWord('aron'));

/* week 4 - task 006
Difference of Volumes of Cuboids
In this simple exercise, you will create a program that will take two lists of integers, a and b. Each list will consist of 3 positive integers above 0, representing the dimensions of cuboids a and b. You must find the difference of the cuboids' volumes regardless of which is bigger.
For example, if the parameters passed are ([2, 2, 3], [5, 4, 1]), the volume of a is 12 and the volume of b is 20. Therefore, the function should return 8.
Your function will be tested with pre-made examples as well as random ones.
If you can, try writing it in one line of code.
*/

const findDifference = (a, b) => Math.abs(a.reduce((a, b) => a * b) - b.reduce((a, b) => a * b));
// console.log(findDifference([5, 21, 26], [1, 19, 3]));

/* week 4 - task 007
How good are you really?
There was a test in your class and you passed it. Congratulations!
But you're an ambitious person. You want to know if you're better than the average student in your class.
You receive an array with your peers' test scores. Now calculate the average and compare your score!
Return True if you're better, else False!
Note:
Your points are not included in the array of your class's points. For calculating the average point you may add your point to the given array!
*/
const betterThanAverage = (classPoints, yourPoints) => yourPoints > classPoints.reduce((a, b) => a + b) / classPoints.length;
// console.log(betterThanAverage([2, 3], 1));

/* week 4 - task 008
The falling speed of petals
When it's spring Japanese cherries blossom, it's called "sakura" and it's admired a lot. The petals start to fall in late April.
Suppose that the falling speed of a petal is 5 centimeters per second (5 cm/s), and it takes 80 seconds for the petal to reach the ground from a certain branch.
Write a function that receives the speed (in cm/s) of a petal as input, and returns the time it takes for that petal to reach the ground from the same branch.
Notes:
The movement of the petal is quite complicated, so in this case we can see the velocity as a constant during its falling.
Pay attention to the data types.
If the initial velocity is non-positive, the return value should be 0
*/
const sakuraFall = v => {
  let fallSpeed = 4;
  return v < 0 ? 0 : v * fallSpeed;
};
// console.log(sakuraFall(5));

/* week 4 - task 009
Simple Fun #352: Reagent Formula
Now we will confect a reagent. There are eight materials to choose from, numbered 1,2,..., 8 respectively.
We know the rules of confect:
material1 and material2 cannot be selected at the same time
material3 and material4 cannot be selected at the same time
material5 and material6 must be selected at the same time
material7 or  material8 must be selected(at least one, or both)
Task
You are given a integer array formula. Array contains only digits 1-8 that represents material 1-8. Your task is to determine if the formula is valid. Returns true if it's valid, false otherwise.
*/

const isValid = f => {
  let a = false,
    b = false,
    c = true,
    d = false;
  a = !(f.includes(1) && f.includes(2));
  b = !(f.includes(3) && f.includes(4));
  if (f.includes(5) || f.includes(6)) {
    c = f.includes(5) && f.includes(6);
  }
  d = f.includes(7) || f.includes(8);
  return a && b && c && d;
};

/*console.log(isValid([7, 1, 2, 3]), false);
console.log(isValid([1, 3, 5, 7]), false);
console.log(isValid([1, 5, 6, 7, 3]), true);
console.log(isValid([5, 6, 7]), true);
console.log(isValid([5, 6, 7, 8]), true);
console.log(isValid([6, 7, 8]), false);
console.log(isValid([7, 8]), true);
*/

/* week 4 - task 010
Who is going to pay for the wall?
Don Drumphet lives in a nice neighborhood, but one of his neighbors has started to let his house go. Don Drumphet wants to build a wall between his house and his neighbor’s, and is trying to get the neighborhood association to pay for it. He begins to solicit his neighbors to petition to get the association to build the wall. Unfortunately for Don Drumphet, he cannot read very well, has a very limited attention span, and can only remember two letters from each of his neighbors’ names. As he collects signatures, he insists that his neighbors keep truncating their names until two letters remain, and he can finally read them.
Your code will show Full name of the neighbor and the truncated version of the name as an array. If the number of the characters in name is less than or equal to two, it will return an array containing only the name as is"
*/
const whoIsPaying = name => [...new Set([name, name.slice(0, 2)])];
//console.log(whoIsPaying('Mexico'));
//console.log(whoIsPaying('Mexico'), ['Mexico', 'Me']);
//console.log(whoIsPaying('Melania'), ['Melania', 'Me']);
//console.log(whoIsPaying('Melissa'), ['Melissa', 'Me']);
// console.log(whoIsPaying('Me'), ['Me']);
//console.log(whoIsPaying(''), ['']);
//console.log(whoIsPaying('I'), ['I']);

/* week 4 - task 011
What's the real floor?
Americans are odd people: in their buildings, the first floor is actually the ground floor and there is no 13th floor (due to superstition).
Write a function that given a floor in the american system returns the floor in the european system.
With the 1st floor being replaced by the ground floor and the 13th floor being removed, the numbers move down to take their place. In case of above 13, they move down by two because there are two omitted numbers below them.
Basements (negatives) stay the same as the universal level.
More information here
Examples
1  =>  0 
0  =>  0
5  =>  4
15  =>  13-3  =>  -3
// TODO:: redo
*/

const getRealFloor = n => {
  if (n > 0 && n <= 13) {
    n = n === 0 ? 0 : n - 1;
  }
  if (n > 13) {
    n = n - 2;
  }
  return n;
};
/*console.log(getRealFloor(1), 0);
console.log(getRealFloor(5), 4);
console.log(getRealFloor(15), 13);*/

/* week 4 - task 012

You're on your way to the market when you hear beautiful music coming from a nearby street performer. The notes come together like you wouln't believe as the musician puts together patterns of tunes. As you wonder what kind of algorithm you could use to shift octaves by 8 pitches or something silly like that, it dawns on you that you have been watching the musician for some 10 odd minutes. You ask, "How much do people normally tip for something like this?" The artist looks up. "Its always gonna be about tree fiddy."
It was then that you realize the musician was a 400 foot tall beast from the paleolithic era. The Loch Ness Monster almost tricked you!
There are only 2 guaranteed ways to tell if you are speaking to The Loch Ness Monster: A.) It is a 400 foot tall beast from the paleolithic era B.) It will ask you for tree fiddy
Since Nessie is a master of disguise, the only way accurately tell is to look for the phrase "tree fiddy". Since you are tired of being grifted by this monster, the time has come to code a solution for finding The Loch Ness Monster. Note: It can also be written as 3.50 or three fifty.
*/
const isLockNessMonster = s => s.includes('tree fiddy') || s.includes('3.50');

/* week 4 - task 013
Some new animals have arrived at the zoo. The zoo keeper is concerned that perhaps the animals do not have the right tails. To help her, you must correct the broken function to make sure that the second argument (tail), is the same as the last letter of the first argument (body) - otherwise the tail wouldn't fit!
If the tail is right return true, else return false.
The arguments will always be strings, and normal letters.
For Haskell, body has the type of String and tail has the type of Char. For Go, body has type string and tail has type rune.
original fv:
function correctTail(bod, tail ;
   sub = body.substr(bodylength-(tail.length)
    if sub = tail) ;
    return true
  }
  else 
    return false
  */
const correctTail = (body, tail) => body.substr(body.length - tail.length) === tail;

/* week 4 - task 014
Collatz Conjecture (3n+1)
The Collatz conjecture (also known as 3n+1 conjecture) is a conjecture that applying the following algorithm to any number we will always eventually reach one:
[This is writen in pseudocode]
if(number is even) number = number / 2
if(number is odd) number = 3*number + 1
#Task
Your task is to make a function hotpo that takes a positive n as input and returns the number of times you need to perform this algorithm to get n = 1.
#Examples
hotpo(1) returns 0
(1 is already 1)
hotpo(5) returns 5
5 -> 16 -> 8 -> 4 -> 2 -> 1
hotpo(6) returns 8
6 -> 3 -> 10 -> 5 -> 16 -> 8 -> 4 -> 2 -> 1
hotpo(23) returns 15
23 -> 70 -> 35 -> 106 -> 53 -> 160 -> 80 -> 40 -> 20 -> 10 -> 5 -> 16 -> 8 -> 4 -> 2 -> 1
*/
const hotpo = n => {
  if (n == 0) return 0;
  let c = 0;
  while (n !== 1) {
    n = n % 2 !== 0 ? 3 * n + 1 : n / 2;
    c++;
  }
  return c;
};
hotpo(6);

/* week 4 - task 015
Pirates!! Are the Cannons ready!??
Ahoy Matey!
Welcome to the seven seas.
You are the captain of a pirate ship.
You are in battle against the royal navy.
You have cannons at the ready.... or are they?
Your task is to check if the gunners are loaded and ready, if they are: Fire!
If they aren't ready: Shiver me timbers!
Your gunners for each test case are 4 or less.
When you check if they are ready their answers are in a dictionary and will either be: aye or nay
Firing with less than all gunners ready is non-optimum (this is not fire at will, this is fire by the captain's orders or walk the plank, dirty sea-dog!)
If all answers are 'aye' then Fire! if one or more are 'nay' then Shiver me timbers!
Also, check out the new Pirates!! Kata: https://www.codewars.com/kata/57e2d5f473aa6a476b0000fe
let a = { Mike: 'aye', Joe: 'aye', Johnson: 'aye', Peter: 'aye' },
  b = { Mike: 'aye', Joe: 'nay', Johnson: 'aye', Peter: 'aye' };
*/
const cannonsReady = gunners => (Object.values(gunners).join().includes('nay') ? 'Shiver me timbers!' : 'Fire!');
//console.log(cannonsReady(b));

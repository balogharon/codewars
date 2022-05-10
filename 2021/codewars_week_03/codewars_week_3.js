/* week 3 - task 001
Sleigh Authentication
Christmas is coming and many people dreamed of having a ride with Santa's sleigh. But, of course, only Santa himself is allowed to use this wonderful transportation. And in order to make sure, that only he can board the sleigh, there's an authentication mechanism.
Your task is to implement the authenticate() method of the sleigh, which takes the name of the person, who wants to board the sleigh and a secret password. If, and only if, the name equals "Santa Claus" and the password is "Ho Ho Ho!" (yes, even Santa has a secret password with uppercase and lowercase letters and special characters :D), the return value must be true. Otherwise it should return false.

Examples:
var sleigh = new Sleigh();
sleigh.authenticate("Santa Claus", "Ho Ho Ho!"); // must return TRUE
sleigh.authenticate("Santa", "Ho Ho Ho!"); // must return FALSE
sleigh.authenticate("Santa Claus", "Ho Ho!"); // must return FALSE
sleigh.authenticate("jhoffner", "CodeWars"); // Nope, even Jake is not allowed to use the sleigh ;)
*/
/*const Sleigh = () => this.authenticate();
Sleigh.prototype.authenticate = function (name, password) {
  const validUser = 'Santa Claus',
    validPass = 'Ho Ho Ho!';
  return name === validUser && password === validPass;
};
*/

/* week 3 - task 002
Convert boolean values to strings 'Yes' or 'No'.
Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.
*/
const boolToWord = bool => (bool ? 'Yes' : 'No');

/* week 3 - task 003
Bin to Decimal
Complete the function which converts a binary number (given as a string) to a decimal number.
*/
const binToDec = bin => parseInt(bin, 2); // TODO:: újra
//console.log(binToDec(1001));

/* week 3 - task 004
Sum of positive
You get an array of numbers, return the sum of all of the positives ones.
Example [1,-4,7,12] => 1 + 7 + 12 = 20
Note: if there is nothing to sum, the sum is default to 0.
*/
const positiveSum = arr => arr.filter(x => x > 0).reduce((a, v) => a + v, 0);
//console.log(positiveSum([]), 15);
//console.log(positiveSum([1, -2, 3, 4, 5]), 13);

/* week 3 - task 005
CSV representation of array
Create a function that returns the CSV representation of a two-dimensional numeric array.
Create a function that returns the CSV representation of a two-dimensional numeric array.

Example:

input:
   [[ 0, 1, 2, 3, 4 ],
    [ 10,11,12,13,14 ],
    [ 20,21,22,23,24 ],
    [ 30,31,32,33,34 ]] 
    
output:
     '0,1,2,3,4\n'
    +'10,11,12,13,14\n'
    +'20,21,22,23,24\n'
    +'30,31,32,33,34'
Array's length > 2.

More details here: https://en.wikipedia.org/wiki/Comma-separated_values

*/
let array = [
  [0, 1, 2, 3, 45],
  [10, 11, 12, 13, 14],
  [20, 21, 22, 23, 24],
  [30, 31, 32, 33, 34]
];
const toCsvText = array => {
  let str = '';
  for (let i = 0; i < array.length; i++) {
    str += i === array.length - 1 ? array[i] : array[i].join(',') + '\\n';
  }
  return str;
};
//console.log(toCsvText(array));

/* week 3 - task 004
String cleaning
Your boss decided to save money by purchasing some cut-rate optical character recognition software for scanning in the text of old novels to your database. At first it seems to capture words okay, but you quickly notice that it throws in a lot of numbers at random places in the text. For example:
stringClean('! !') == '! !'
stringClean('123456789') == ''
stringClean('This looks5 grea8t!') == 'This looks great!'
Your harried co-workers are looking to you for a
 solution to take this garbled text and remove all of the numbers. 
 Your program will take in a string and clean 
 out all numeric characters, and return a string
  with spacing and special characters ~#$%^&!@*():;"'.,? all intact.
*/

/* week 3 - task 005 */
const stringClean = s => s.replace(/[0-9]/g, '');
// console.log(stringClean('This looks5 grea8t!'));
/* stringClean('123456789') == ''
stringClean('This looks5 grea8t!') == 'This looks great!'
*/

/* week 3 - task 006 
Man in the west
A western man is trying to find gold in a river. To do that, he passes a bucket through the river's soil and then checks if it contains any gold. However, he could be more productive if he wrote an algorithm to do the job for him.
So, you need to check if there is gold in the bucket, and if so, return True/true. If not, return False/false.
*/
const checkTheBucket = bucket => bucket.includes('gold');
// console.log(checkTheBucket(['gold', 'stone', 'stone', 'stone', 'stone']));

/* week 3 - task 007 
Return Negative
makeNegative(0); // return -1
makeNegative(-5); // return -5
makeNegative(0); // return 0
makeNegative(0.12); // return -0.12
*/
const makeNegative = num => -Math.abs(num);
// console.log(makeNegative(-5));

/* week 3 - task 008 
Array plus array
I'm new to coding and now I want to get the sum of two arrays...actually the sum of all their elements. I'll appreciate for your help.
P.S. Each array includes only integer numbers. Output is a number too.
*/
const arrayPlusArray = (arr1, arr2) => [...arr1, ...arr2].reduce((a, b) => a + b);
//console.log(arrayPlusArray([1, 2, 3], [4, 5, 6]));

/* week 3 - task 009 
Reversed sequence
Build a function that returns an array of integers from n to 1 where n>0.
Example : n=5 --> [5,4,3,2,1]
*/

const reverseSeq = n => Array.from(Array(n), (e, i) => i + 1).reverse();
// console.log(reverseSeq(5));

/* week 3 - task 010 
Even or Odd
Create a function (or write a script in Shell) that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
*/
const even_or_odd = number => (number % 2 === 0 ? 'Even' : 'Odd');

/* week 3 - task 011 
Do you speak "English"?
Given a string of arbitrary length with any ascii characters. Write a function to determine whether the string contains the whole word "English".
The order of characters is important -- a string "abcEnglishdef" is correct but "abcnEglishsef" is not correct.
Upper or lower case letter does not matter -- "eNglisH" is also correct.
Return value as boolean values, true for the string to contains "English", false for it does not.
*/
const spEng = sentence => sentence.search(/english/gi) !== -1;
// vconsole.log(spEng('english'));

/* week 3 - task 012 
Is integer safe to use?
Not all integers can be represented by JavaScript/TypeScript. 
It has space to to represent 53bit signed integers. 
In this Kata, we've to determine if it is safe to use the integer or not. 
Make use of the latest ES6 features to find this.
SafeInteger(9007199254740990) //true
SafeInteger(-90) //true
SafeInteger(9007199254740992) //false
*/
const safeInteger = n => n <= Number.MAX_SAFE_INTEGER;
// console.log(safeInteger(1));

/* week 3 - task 013
Is it even?
In this Kata we are passing a number (n) into a function.
Your code will determine if the number passed is even (or not).
The function needs to return either a true or false.
Numbers may be positive or negative, integers or floats.
Floats are considered UNeven for this kata.
*/
const testEven = n => n % 2 !== 0;
//console.log(testEven(1));

/* week 3 - task 013
get character from ASCII Value
Write a function which takes a number and returns the corresponding ASCII char for that value.
Example:
get_char(65) # => 'A'
*/
const getChar = c => String.fromCharCode(c);
//console.log(getChar(55));

/* week 3 - task 014
ASCII Total
You'll be given a string, and have to return the sum of all characters as an int. The function should be able to handle all ASCII characters.
examples:
uniTotal("a") == 97 uniTotal("aaa") == 291
*/
const uniTotal = c =>
  c
    .split('')
    .map(a => a.charCodeAt())
    .reduce((a, b) => a + b, 0);
// console.log(uniTotal(''));

/* week 3 - task 015
Find the Remainder
Write a function that accepts two arguments and returns the remainder after dividing the larger number by the smaller number. Division by zero should return NaN (in C#, throw a new DivideByZeroException instead). Arguments will both be integers.
*/
const remainder = (a, b) => {
  if (a === 0 || b === 0) {
    return NaN;
  }
  return a < b ? b % a : a % b;
};
// console.log(remainder(-15, 5));

/* week 3 - task 016
A function within a function
Given an input n, write a function always that returns a function which returns n. Ruby should return a lambda or a proc.
var three = always(3);
three(); // returns 3
*/
// Todo:: again
const always = a => () => a;
// var three = always(3);
// console.log(three());

/* week 3 - task 017
Exclamation marks series #1: Remove a exclamation mark from the end of string
Description:
Remove a exclamation mark from the end of string. For a beginner kata, you can assume that the input data is always a string, no need to verify it.

Examples
remove("Hi!") === "Hi"
remove("Hi!!!") === "Hi!!"
remove("!Hi") === "!Hi"
remove("!Hi!") === "!Hi"
remove("Hi! Hi!") === "Hi! Hi"
remove("Hi") === "Hi"
Note
Please don't post issue about difficulty or duplicate.
*/
// TODO:: újracsinálni!!! mert jó, de nem így kell..
const remove = s => (s.charAt(s.length - 1) === '!' ? s.substring(0, s.length - 1) : s);
// console.log(remove('Hi'));

/* week 3 - task 017
Calculate average
Write a function which calculates the average of the numbers in a given list.
Note: Empty arrays should return 0.

*/
const find_average = array => (array.length ? array.reduce((a, b) => a + b) / array.length : 0);
// console.log(find_average([1, 2, 3, 4]));

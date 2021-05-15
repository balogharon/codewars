/* week 2 - task 001
Generate range of integers
Implement a function named generateRange(min, max, step), which takes three arguments and generates a range of integers from min to max, with the step. The first integer is the minimum value, the second is the maximum of the range and the third is the step. (min < max)
Note
min < max
step > 0
the range does not HAVE to include max (depending on the step)
*/
const generateRange = (min, max, step) => {
  let arr = [];
  while (min <= max) {
    arr.push(min);
    min += step;
  }
  return arr;
};

// console.log(generateRange(2, 10, 2)); // should return array of [2,4,6,8,10]
// console.log(generateRange(1, 10, 3)); // should return array of [1,4,7,10]

/* week 2 - task 002
Find the smallest integer in the array
Given an array of integers your solution should find the smallest integer.
For example:
Given [34, 15, 88, 2] your solution will return 2
Given [34, -345, -1, 100] your solution will return -345
You can assume, for the purpose of this kata, that the supplied array will not be empty.
*/
class SmallestIntegerFinder {
  // Todo: retry with math obj..
  findSmallestInt(args) {
    return args.sort((a, b) => a - b).shift();
  }
}
// let a = new SmallestIntegerFinder();
// console.log(a.findSmallestInt([78, 56, 232, 12, 0]));

/* 
week 2 - task 003 
Correct the mistakes of the character recognition software
Character recognition software is widely used to digitise printed texts. Thus the texts can be edited, searched and stored on a computer.
When documents (especially pretty old ones written with a typewriter), are digitised character recognition softwares often make mistakes.
Your task is correct the errors in the digitised text. You only have to handle the following mistakes:

S is misinterpreted as 5
O is misinterpreted as 0
I is misinterpreted as 1
The test cases contain numbers only by mistake.
*/
const correct = string => {
  const x = {
    0: 'O',
    1: 'I',
    5: 'S'
  };
  return [...string].map((a, b) => (a.match(/[\d]+/g) ? x[parseInt(a)] : a)).join('');
};

// console.log(correct('DUBL1N'));
/*Test.assertEquals(correct("L0ND0N"),"LONDON");
Test.assertEquals(correct("DUBL1N"),"DUBLIN");
Test.assertEquals(correct("51NGAP0RE"),"SINGAPORE");
Test.assertEquals(correct("BUDAPE5T"),"BUDAPEST");
Test.assertEquals(correct("PAR15"),"PARIS"); */

/* 
week 2 - task 004 
Exclamation marks series #11: Replace all vowel to exclamation mark in the sentence
Description:
Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.
Examples
replace("Hi!") === "H!!"
replace("!Hi! Hi!") === "!H!! H!!"
replace("aeiou") === "!!!!!"
replace("ABCDE") === "!BCD!"
*/
const replace = s => s.replace(/[aeiou]/gi, '!');
// console.log(replace('ABCDE'));

/* 
week 2 - task 005 
Convert number to reversed array of digits
Given a random non-negative number, you have to return the digits of this number within an array in reverse order.
ex.: 348597 => [7,9,5,8,4,3]
*/
const digitize = n => [...n.toString()].map(x => Number(x)).reverse((a, b) => a - b);
//console.log(digitize(100));

/* 
week 2 - task 006 
Sum of Multiples
Your Job
Find the sum of all multiples of n below m

Keep in Mind
n and m are natural numbers (positive integers)
m is excluded from the multiples
Examples
sumMul(2, 9)   ==> 2 + 4 + 6 + 8 = 20
sumMul(3, 13)  ==> 3 + 6 + 9 + 12 = 30
sumMul(4, 123) ==> 4 + 8 + 12 + ... = 1860
sumMul(4, -7)  ==> "INVALID"
*/
const sumMul = (n, m) => {
  let x = null;
  for (let i = 0; i < m; i * n) {
    x += i;
    i += n;
  }
  return x || 'INVALID';
};
// console.log(sumMul(2, 9)); // 20
// console.log(sumMul(0, 0)); // INVALID
// console.log(sumMul(4, -7)); // INVALID

/* week 2 - task 007 
Hex to Decimal
Complete the function which converts hex number (given as a string) to a decimal number.
*/
const hexToDec = hex => parseInt(hex, 16); // TODO:: memo..
//console.log(hexToDec('-C')); // 1
//console.log(hexToDec('a')); // 10
//console.log(hexToDec('10')); // 16
//console.log(hexToDec('FF')); // 255
//console.log(hexToDec('-C')); // -12

/* week 2 - task 008 
String repeat
Write a function called repeatStr which repeats the given string string exactly n times.
repeatStr(6, "I") // "IIIIII"
repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"
*/
const repeatStr = (n, s) => s.repeat(n);
//console.log(repeatStr(6, 'aron'));

/* week 2 - task 009
Given an array of integers, return a new array with each value doubled.
For example:
[1, 2, 3] --> [2, 4, 6]
For the beginner, try to use the map method - it comes in very handy quite a lot so is a good one to know.
*/
const maps = x => x.map(x => x * 2);
//console.log(maps([1, 2, 3]), [2, 4, 6]);
//console.log(maps([4, 1, 1, 1, 4]), [8, 2, 2, 2, 8]);
//console.log(maps([2, 2, 2, 2, 2, 2]), [4, 4, 4, 4, 4, 4]);

/* week 2 - task 010
Kata Example Twist
This is an easy twist to the example kata (provided by Codewars when learning how to create your own kata).
Add the value "codewars" to the array websites/Websites 1,000 times.
var websites = []
*/
// solution 1
const websites = 'websites '.repeat(1000).split(' ');
websites.pop();
// solution 2.
const websites2 = new Array(1000).fill('codewars');

/* week 2 - task 011
Jenny's secret message
Jenny has written a function that returns a greeting for a user. However, she's in love with Johnny, and would like to greet him slightly different. She added a special case to her function, but she made a mistake.
Can you help her?
original: 
function greet(name){
  return "Hello, " + name + "!";
  if(name === "Johnny")
    return "Hello, my love!";
}*/
const greet = name => `Hello, ${name === 'Johnny' ? 'my love' : name}!`;
// console.log(greet('Aron'));

/* week 2 - task 012
Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).
For example,
[true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true]
The correct answer would be 17.

Hint: Don't forget to check for bad values like null/undefined
}*/
// let arrayOfSheep = [true, true, true, false, true, true, true, true, true, false, true, false, true, false, false, true, true, true, true, true, false, false, true, true];
const countSheeps = arrayOfSheep => arrayOfSheep.reduce((acc, v) => (v === true ? acc + 1 : acc), 0);
//countSheeps(arrayOfSheep);

/* week 2 - task 013
Filling an array (part 1)
We want an array, but not just any old array, an array with contents!
Write a function that produces an array with the numbers 0 to N-1 in it.
For example, the following code will result in an array containing the numbers 0 to 4:
arr(5) // => [0,1,2,3,4]
Note: The parameter is optional. So you have to give it a default value.
}*/
const arr = (n = 0) => {
  return new Array(n)
    .fill(n)
    .map(x => (n = n - 1))
    .reverse();
};
arr();
// TODO:recheck;
// const arr = n => n ? [...Array(n).keys()] : []

/* week 2 - task 014
Short Long Short
Given 2 strings, a and b, return a string of the form short+long+short, with the shorter string on the outside and the longer string on the inside. The strings will not be the same length, but they may be empty ( length 0 ).
For example:
solution("1", "22") // returns "1221"
solution("22", "1") // returns "1221"
}*/
const solution = (a, b) => (a.length < b.length ? a + b + a : b + a + b);
//console.log(solution('1', '22'));
//console.log(solution('22', '1'));

/* week 2 - task 015
What if we need the length of the words separated by a space to be added at the end of that same word and have it returned as an array?
addLength('apple ban') => ["apple 5", "ban 3"]
addLength('you will win') => ["you 3", "will 4", "win 3"]
Your task is to write a function that takes a String and returns an Array/list with the length of each word added to each element .
Note: String will have at least one element; words will always be separated by a space.
}*/

const addLength = str => str.split(' ').map(x => `${x} ${x.length}`);
//console.log(addLength('apple ban'));

/* week 2 - task 016
Find numbers which are divisible by given number
Complete the function which takes two arguments and returns all numbers which are divisible by the given divisor. First argument is an array of numbers and the second is the divisor.
divisibleBy([1, 2, 3, 4, 5, 6], 2) == [2, 4, 6]
}*/

const divisibleBy = (n, d) => n.filter(x => x % d === 0);
//console.log(divisibleBy([1, 2, 3, 4, 5, 6], 2));

/* week 2 - task 017
Reversed Words
Complete the solution so that it reverses all of the words within the string passed in.
Example:
"The greatest victory is that which requires no battle" --> "battle no requires which that is victory greatest The"
}*/

const reverseWords = str => str.split(' ').reverse().join(' ');
//console.log(reverseWords('hello world!'));

/* week 2 - task 018
If you can read this...
Task
You'll have to translate a string to Pilot's alphabet (NATO phonetic alphabet).
NATO phonetic alphabet here:
https://en.wikipedia.org/wiki/NATO_phonetic_alphabet
Input:
If, you can read?
Output:
India Foxtrot , Yankee Oscar Uniform Charlie Alfa November Romeo Echo Alfa Delta ?
Note:
There are preloaded dictionary you can use, named NATO
The set of used punctuation is ,.!?.
Punctuation should be kept in your return string, but spaces should not.
Xray should not have a dash within.
Every word and punctuation mark should be seperated by a space ' '.
There should be no trailing whitespace

}*/
let NATO = {
  a: 'Alfa',
  n: 'November',
  b: 'Bravo',
  o: 'Oscar',
  c: 'Charlie',
  p: 'Papa',
  d: 'Delta',
  q: 'Quebec',
  e: 'Echo',
  r: 'Romeo',
  f: 'Foxtrot',
  s: 'Sierra',
  g: 'Golf',
  t: 'Tango',
  h: 'Hotel',
  u: 'Uniform',
  i: 'India',
  v: 'Victor',
  j: 'Juliett',
  w: 'Whiskey',
  k: 'Kilo',
  x: 'Xray',
  l: 'Lima',
  y: 'Yankee',
  m: 'Mike',
  z: 'Zulu'
};
const to_nato = words => {
  return words
    .split(' ')
    .map(x =>
      x
        .toLowerCase()
        .split('')
        .map(y => (y.match(/[,.!?]/gi) ? y : NATO[y]))
        .join(' ')
    )
    .join(' ');
};

//console.log(to_nato('If you can read'));
//console.log(to_nato('Did not see that coming'), 'Delta India Delta November Oscar Tango Sierra Echo Echo Tango Hotel Alfa Tango Charlie Oscar Mike India November Golf');
console.log(to_nato('go for it!'), 'Golf Oscar Foxtrot Oscar Romeo India Tango !');

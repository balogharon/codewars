/* week 8 - task 001
Longest alphabetical substring
Find the longest substring in alphabetical order.
Example: the longest alphabetical substring in "asdfaaaabbbbcttavvfffffdf" is "aaaabbbbctt".
There are tests with strings up to 10 000 characters long so your code will need to be efficient.
The input will only consist of lowercase characters and will be at least one letter long.
If there are multiple solutions, return the one that appears first.
Good luck :)
*/
const longest = str => {
  let total = 0,
    start = 0,
    prevStr = str[0],
    finalTxt = '';
  for (let i = 1; i <= str.length; ++i) {
    if (i === str.length || str[i] < prevStr) {
      if (total < i - start) {
        finalTxt = str.substring(start, i);
        total = i - start;
      }
      start = i;
    }
    prevStr = str[i];
  }
  return finalTxt;
};
// console.log('final collected', longest('asdfaaaabbbbcttavvfffffdf'));

/**
String Evaluation
Evaluate the given string with the given conditons.
The conditions will be passed in an array and will be formatted like this:

{symbol or digit}{comparison operator}{symbol or digit}
Return the results in an array.

The characters in the conditions will always be in the string. Characters in the string are chosen from ascii letters + @#$%^&*()_{}[]

Example
input string: "aab#HcCcc##l#"
conditions: ["a<b", "#==4", "c>=C", "H!=a"]
The conditions in this example array can be interpreted as:

"a<b": The number of times "a" occurs in the string should be less than the number of times "b" occurs in the string
"#==4": "#" should occur exactly 4 times in the string
"c>=C": "c" should occur greater than or equal to the number of times "C" occurs
"H!=a": The number of times "H" occurs should not equal the number of times "a" occurs
In this example condition 1 is false and 2, 3, 4 are true. So the return value will be an array as such:

[False, True, True, True]
 */
const string_evaluation = (string, condition) => {
  let final = [];
  const regex = /\d/;
  condition.map(letter => {
    let a = letter.substring(0, 1),
      aL = regex.test(a) ? a : string.split(a).length - 1,
      op = letter.substring(1, letter.length - 1),
      b = letter.charAt(letter.length - 1),
      bL = regex.test(b) ? b : string.split(b).length - 1,
      ax = String(aL + op + bL);
    final.push(eval(ax));
  });
  return final;
};
//console.log(string_evaluation('aab#HcCcc##l#', ['a<b', '#==4', 'c>=C', 'H!=a']));

/**
String Evaluation 
Fibonacci, Tribonacci and friends
If you have completed the Tribonacci sequence kata, you would know by now that mister Fibonacci has at least a bigger brother. If not, give it a quick look to get how things work.
Well, time to expand the family a little more: think of a Quadribonacci starting with a signature of 4 elements and each following element is the sum of the 4 previous, a Pentabonacci (well Cinquebonacci would probably sound a bit more italian, but it would also sound really awful) with a signature of 5 elements and each following element is the sum of the 5 previous, and so on.
Well, guess what? You have to build a Xbonacci function that takes a signature of X elements - and remember each next element is the sum of the last X elements - and returns the first n elements of the so seeded sequence.
xbonacci {1,1,1,1} 10 = {1,1,1,1,4,7,13,25,49,94}
xbonacci {0,0,0,0,1} 10 = {0,0,0,0,1,1,2,4,8,16}
xbonacci {1,0,0,0,0,0,1} 10 = {1,0,0,0,0,0,1,2,3,6}
xbonacci {1,1} produces the Fibonacci sequence
*/
const Xbonacci = (signature, n) => {
  let arr = [],
    arrTotal = [],
    sig = signature.length;
  arrTotal = [...signature];
  if (n < sig) {
    arrTotal = signature.slice(0, n);
  } else {
    for (let i = 0; i < n - sig; i++) {
      arr = [...signature];
      let sum = arr.reduce((a, i) => a + i);
      arr.push(sum);
      arrTotal.push(sum);
      signature = signature.slice(1);
      signature.push(sum);
    }
  }
  return arrTotal;
};
//console.log(Xbonacci([0, 1], 10)); //[0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
//console.log(Xbonacci([1, 1], 10)); //[1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
//console.log(Xbonacci([0, 0, 0, 0, 1], 10)); //[0, 0, 0, 0, 1, 1, 2, 4, 8, 16]
//console.log(Xbonacci([1, 0, 0, 0, 0, 0, 1], 10)); //[1, 0, 0, 0, 0, 0, 1, 2, 3, 6]
//console.log(Xbonacci([1, 0, 0, 0, 0, 0, 0, 0, 0, 0], 20)); //[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 2, 4, 8, 16, 32, 64, 128, 256]
//console.log(Xbonacci([4, 2, 6, 11, 18, 6, 0, 9, 17, 6, 2, 9, 7, 12, 17, 8, 7, 7, 11, 6], 16)); //[4, 2, 6, 11, 18, 6, 0, 9, 17, 6, 2, 9, 7, 12, 17, 8]
// console.log(Xbonacci([3, 12, 19, 3, 1, 5, 12, 6, 14, 2, 15, 16, 5, 9], 2)); //[4, 2, 6, 11, 18, 6, 0, 9, 17, 6, 2, 9, 7, 12, 17, 8]

/**
Rot13
ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.
Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".
*/

const rot13 = message => {
  const lower = 'abcdefghijklmnopqrstuvwxyz',
    upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let returnStr = message
    .split('')
    .map(function (str) {
      return str.match(/[a-z]/gi) ? (str.charCodeAt(0) < 90 ? upper[(upper.indexOf(str) + 13) % upper.length] : lower[(lower.indexOf(str) + 13) % upper.length]) : str;
    })
    .join('');
  return returnStr;
};
// thanks for proudlygeek
// console.log(rot13('test '));

/**
Take a Number And Sum Its Digits Raised To The Consecutive Powers And ....¡Eureka!!
The number 89 is the first integer with more than one digit that fulfills the property partially introduced in the title of this kata. What's the use of saying "Eureka"? Because this sum gives the same number.
In effect: 89 = 8^1 + 9^2
The next number in having this property is 135.
See this property again: 135 = 1^1 + 3^2 + 5^3
We need a function to collect these numbers, that may receive two integers a, b that defines the range [a, b] (inclusive) and outputs a list of the sorted numbers in the range that fulfills the property described above.
Let's see some cases:
sumDigPow(1, 10) == [1, 2, 3, 4, 5, 6, 7, 8, 9]
sumDigPow(1, 100) == [1, 2, 3, 4, 5, 6, 7, 8, 9, 89]
If there are no numbers of this kind in the range [a, b] the function should output an empty list.
sumDigPow(90, 100) == []
*/
const sumDigPow = (a, b) => {
  let returnArr = [];
  for (let i = a; i < b; i++) {
    if (a < 10 && i < 10) {
      returnArr.push(i);
    }
    let chars = String(i).split('');
    if (chars.reduce((acc, val, index) => Number(acc) + Number(val) ** (index + 1)) === i) {
      // thanks for svitekpavel
      returnArr.push(i);
    }
  }
  return returnArr;
};

console.log(sumDigPow(1, 10)); //[1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(sumDigPow(1, 100)); //[1, 2, 3, 4, 5, 6, 7, 8, 9, 89]
console.log(sumDigPow(10, 100)); //[89]
console.log(sumDigPow(90, 100)); // , []
console.log(sumDigPow(90, 150)); // [135]
//console.log(sumDigPow(50, 150), [89, 135]);
//console.log(sumDigPow(10, 150), [89, 135]);

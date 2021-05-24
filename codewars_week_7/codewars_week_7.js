/* week 7 - task 001 
Find the Difference in Age between Oldest and Youngest Family Members
At the annual family gathering, the family likes to find the oldest living family member’s age and the youngest family member’s age and calculate the difference between them.
You will be given an array of all the family members' ages, in any order. The ages will be given in whole numbers, so a baby of 5 months, will have an ascribed ‘age’ of 0. Return a new array (a tuple in Python) with [youngest age, oldest age, difference between the youngest and oldest age].
*/

const differenceInAges = ages => {
  ages.sort((a, b) => a - b);
  return [ages[0], ages[ages.length - 1], ages[ages.length - 1] - ages[0]];
};
//console.log(differenceInAges([82, 15, 6, 38, 35])); // [6, 82, 76]
//console.log(differenceInAges([57, 99, 14, 32]), [14, 99, 85]);

/* week 7 - task 002 
Descending Order
Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.
Examples:
Input: 42145 Output: 54421
Input: 145263 Output: 654321
Input: 123456789 Output: 987654321
*/
const descendingOrder = n => {
  return Number.parseInt(
    n
      .toString()
      .split('')
      .sort((a, b) => a - b)
      .reverse()
      .join('')
  );
};

//console.log(descendingOrder(0), 0);
//console.log(descendingOrder(123456789), 987654321);

/*
/* week 7 - task 003
SpeedCode #2 - Array Madness
Objective
Given two integer arrays a, b, both of length >= 1, create a program that returns true if the sum of the squares of each element in a is strictly greater than the sum of the cubes of each element in b.
E.g.
arrayMadness([4, 5, 6], [1, 2, 3]); // returns true since 4 ** 2 + 5 ** 2 + 6 ** 2 > 1 ** 3 + 2 ** 3 + 3 ** 3
Get your timer out. Are you ready? Ready, get set, GO!!!
*/

const arrayMadness = (a, b) => a.reduce((a, b) => a + Math.pow(b, 2), 0) > b.reduce((a, b) => a + Math.pow(b, 3), 0);
//console.log(arrayMadness([4, 5, 6], [1, 2, 3])); //, true
//console.log(arrayMadness([4, 5, 6], [3, 4, 5]), false);
//console.log(arrayMadness([3, 4, 5], [2, 3, 4]), false);

/*
/* week 7 - task 004
Write a function, gooseFilter / goose-filter / goose_filter / GooseFilter, that takes an array of strings as an argument and returns a filtered array containing the same elements but with the 'geese' removed.
The geese are any strings in the following array, which is pre-populated in your solution:
geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]
For example, if this array were passed as an argument:
["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]
Your function would return the following array:
["Mallard", "Hook Bill", "Crested", "Blue Swedish"]
The elements in the returned array should be in the same order as in the initial array passed to your function, albeit with the 'geese' removed. Note that all of the strings will be in the same case as those provided, and some elements may be repeated.
*/
const gooseFilter = birds => {
  const geese = ['African', 'Roman Tufted', 'Toulouse', 'Pilgrim', 'Steinbacher'];
  return birds.filter(e => {
    if (!geese.includes(e)) return e;
  });
};
// console.log(gooseFilter(['African', 'Roman Tufted', 'Toulouse', 'Pilgrim', 'Steinbacher']));

/* week 7 - task 005
Find the first non-consecutive number

Your task is to find the first element of an array that is not consecutive.
By not consecutive we mean not exactly 1 larger than the previous element of the array.
E.g. If we have an array [1,2,3,4,6,7,8] then 1 then 2 then 3 then 4 are all consecutive but 6 is not, so that's the first non-consecutive number.
If the whole array is consecutive then return null2.
The array will always have at least 2 elements1 and all elements will be numbers. The numbers will also all be unique and in ascending order. The numbers could be positive or negative and the first non-consecutive could be either too!
If you like this Kata, maybe try this one next: https://www.codewars.com/kata/represent-array-of-numbers-as-ranges
1 Can you write a solution that will return null2 for both [] and [ x ] though? (This is an empty array and one with a single number and is not tested for, but you can write your own example test. )
2
Swift, Ruby and Crystal: nil
Haskell: Nothing
Python, Rust, Scala: None
Julia: nothing
Nim: none(int) (See options)
*/
const firstNonConsecutive = arr => {
  let final = arr
    .map((a, b) => {
      if (a + 1 !== arr[b + 1]) return arr[b + 1];
    })
    .filter(e => e != null)[0];
  return final !== undefined ? final : null;
};
// console.log(firstNonConsecutive([-3, -2, 0, 1, 2]));

/* week 7 - task 006
Beginner Series #3 Sum of Numbers
Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.
Note: a and b are not ordered!
Examples
GetSum(1, 0) == 1   // 1 + 0 = 1
GetSum(1, 2) == 3   // 1 + 2 = 3
GetSum(0, 1) == 1   // 0 + 1 = 1
GetSum(1, 1) == 1   // 1 Since both are same
GetSum(-1, 0) == -1 // -1 + 0 = -1
GetSum(-1, 2) == 2  // -1 + 0 + 1 + 2 = 2
*/

const getSum = (a, b) => {
  if (a === b) {
    return a;
  }
  let arr = [a, b].sort((a, b) => a - b);
  for (let i = arr[0]; i <= arr[1]; i++) {
    if (!arr.includes(i)) arr.push(i);
  }
  return arr ? arr.reduce((a, b) => a + b) : null;
};

/* week 7 - task 007
Regular Ball Super Ball
Create a class Ball. Ball objects should accept one argument for "ball type" when instantiated.
If no arguments are given, ball objects should instantiate with a "ball type" of "regular."
ball1 = new Ball();
ball2 = new Ball("super");
ball1.ballType     //=> "regular"
ball2.ballType     //=> "super"
*/
class Ball {
  constructor(btype = 'regular') {
    this.ballType = btype;
  }
}
// console.log(new Ball().ballType);

/* week 7 - task 008
Is the string uppercase?
Task
Add the isUpperCase method to String to see whether the string is ALL CAPS. For example:

"c".isUpperCase() == false
"C".isUpperCase() == true
"hello I AM DONALD".isUpperCase() == false
"HELLO I AM DONALD".isUpperCase() == true
"ACSKLDFJSgSKLDFJSKLDFJ".isUpperCase() == false
"ACSKLDFJSGSKLDFJSKLDFJ".isUpperCase() == true
In this Kata, a string is said to be in ALL CAPS whenever it does not contain any lowercase letter so any string containing no letters at all is trivially considered to be in ALL CAPS.
*/
String.prototype.isUpperCase = function () {
  return this.valueOf().toUpperCase() === this.valueOf();
};
// console.log('hello I AM DONALD'.isUpperCase());

/* week 7 - task 009
Playing with cubes II
Hey Codewarrior!
You already implemented a Cube class, but now we need your help again! I'm talking about constructors. We don't have one. Let's code two: One taking an integer and one handling no given arguments!
Also we got a problem with negative values. Correct the code so negative values will be switched to positive ones!
The constructor taking no arguments should assign 0 to Cube's Side property.
*/
// This Cube function needs help
// change the constructor so that it can take an integer for the side or no args
class Cube {
  constructor(n = 0) {
    this.setSide(n);
  }
  getSide() {
    return this.side;
  }
  setSide(n) {
    this.side = Math.abs(n);
  }
}
var c = new Cube(0);
// console.log(c.getSide(), 'Should be 10');

/* week 7 - task 010
Lexical this
Complete the Person object, by completing the FillFriends function to fill the _friends Array for the person object.
Output
Return the person object with the Name, Friends and FillFriends function filled out which will fill the input into the Friends property.
Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
*/
const Person = () => {
  return {
    _name: 'Leroy',
    _friends: [],
    fillFriends(f) {
      this._friends = [...f];
    }
  };
};

/* week 7 - task 011
Lexical this
Complete the Person object, by completing the FillFriends function to fill the _friends Array for the person object.
Output
Return the person object with the Name, Friends and FillFriends function filled out which will fill the input into the Friends property.
Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
*/
const htmlspecialchars = formData => {
  formData.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
};
htmlspecialchars('aron"');

/* week 7 - task 011
The Story:
Bob is working as a bus driver. However, he has become extremely popular amongst the city's residents. With so many passengers wanting to get aboard his bus, he sometimes has to face the problem of not enough space left on the bus! He wants you to write a simple program telling him if he will be able to fit all the passengers.

Task Overview:
You have to write a function that accepts three parameters:

cap is the amount of people the bus can hold excluding the driver.
on is the number of people on the bus excluding the driver.
wait is the number of people waiting to get on to the bus excluding the driver.
If there is enough space, return 0, and if there isn't, return the number of passengers he can't take.

Usage Examples:
cap = 10, on = 5, wait = 5 --> 0 # He can fit all 5 passengers
cap = 100, on = 60, wait = 50 --> 10 # He can't fit 10 of the 50 waiting
*/
const enough = (cap, on, wait) => {
  let x = cap - (on + wait);
  return x < 0 ? Math.abs(x) : 0;
};
const enough2 = (cap, on, wait) => (cap - wait - on < 0 ? on + wait - cap : 0);
//console.log(enough(10, 5, 5), 0);
//console.log(enough(100, 60, 50), 10);
//console.log(enough(20, 5, 5), 0);

/* week 7 - task 012 
Highest and Lowest
In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.
Example:
highAndLow("1 2 3 4 5");  // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"
Notes:
All numbers are valid Int32, no need to validate them.
There will always be at least one number in the input string.
Output string must be two numbers separated by a single space, and highest number is first.
*/
const highAndLow = numbers => {
  let arr = numbers
    .split(' ')
    .sort((a, b) => a - b)
    .map(a => Number.parseInt(a));
  return `${Math.max(...arr)} ${Math.min(...arr)}`;
};
// console.log(highAndLow('4 5 29 54 4 0 -214 542 -64 1 -3 6 -6')); // '542 -214'

/* week 7 - task 013 
Vowel Count
Return the number (count) of vowels in the given string.
We will consider a, e, i, o, u as vowels for this Kata (but not y).
The input string will only consist of lower case letters and/or spaces.
*/
const getCount = str => {
  return (str.match(/[aeiou]/gi) || []).length;
};

/* week 7 - task 014 
Sort Numbers
Finish the solution so that it sorts the passed in array of numbers. If the function passes in an empty array or null/nil value then it should return an empty array.
For example:
solution([1, 2, 10, 50, 5]); // should return [1,2,5,10,50]
solution(null); // should return []
*/
const solution = nums => (nums ? nums.sort((a, b) => a - b) : []);
//console.log(solution([1, 2, 3, 10, 5]), [1, 2, 3, 5, 10]);
//console.log(solution(null), []);
//console.log(solution([]), []);
//console.log(solution([20, 2, 10]), [2, 10, 20]);
//console.log(solution([2, 20, 10]), [2, 10, 20]);

/* week 7 - task 015 
Mumbling
This time no story, no theory. The examples below show you how to write function accum:
Examples:
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
The parameter of accum is a string which includes only letters from a..z and A..Z.
*/
const accum = s => {
  return s
    .split('')
    .map((a, i) => a.toUpperCase() + `${a.toLowerCase().repeat(i)}`)
    .join('-');
};
//console.log(accum('ZpglnRxqenU'), 'Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu');
//console.log(accum('NyffsGeyylB'), 'N-Yy-Fff-Ffff-Sssss-Gggggg-Eeeeeee-Yyyyyyyy-Yyyyyyyyy-Llllllllll-Bbbbbbbbbbb');
//console.log(accum('MjtkuBovqrU'), 'M-Jj-Ttt-Kkkk-Uuuuu-Bbbbbb-Ooooooo-Vvvvvvvv-Qqqqqqqqq-Rrrrrrrrrr-Uuuuuuuuuuu');
//console.log(accum('EvidjUnokmM'), 'E-Vv-Iii-Dddd-Jjjjj-Uuuuuu-Nnnnnnn-Oooooooo-Kkkkkkkkk-Mmmmmmmmmm-Mmmmmmmmmmm');
//console.log(accum('HbideVbxncC'), 'H-Bb-Iii-Dddd-Eeeee-Vvvvvv-Bbbbbbb-Xxxxxxxx-Nnnnnnnnn-Cccccccccc-Ccccccccccc');

/* week 7 - task 016 
Isograms
An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.
isIsogram("Dermatoglyphics") == true
isIsogram("aba") == false
isIsogram("moOse") == false // -- ignore letter case
*/
const isIsogram = str => {
  let final = [],
    isTrue = true;
  str.split('').forEach(element => {
    !final.includes(element.toLowerCase()) ? final.push(element.toLowerCase()) : (isTrue = false);
  });
  return isTrue;
};
// console.log(isIsogram('moOse')); // false, 'same chars may not be adjacent'
//console.log(isIsogram('Dermatoglyphics'), true);
//console.log(isIsogram('isogram'), true);
//console.log(isIsogram('moOse'), false, 'same chars may not be same case');
//console.log(isIsogram('isIsogram'), false);
//console.log(isIsogram(''), true, 'an empty string is a valid isogram');

/* week 7 - task 017 
Credit Card Mask
Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.
Your task is to write a function maskify, which changes all but the last four characters into '#'.
Examples
maskify("4556364607935616") == "############5616"
maskify(     "64607935616") ==      "#######5616"
maskify(               "1") ==                "1"
maskify(                "") ==                 ""
// "What was the name of your first pet?"
maskify("Skippy")                                   == "##ippy"
maskify("Nananananananananananananananana Batman!") == "####################################man!"
*/
const maskify = cc =>
  cc
    .split('')
    .map((a, i) => (i >= cc.split('').length - 4 ? a : '#'))
    .join('');
//console.log(maskify('4556364607935616'), '############5616');
//console.log(maskify('1'), '1');
//console.log(maskify('11111'), '#1111');

/* week 7 - task 018
Complementary DNA
Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.
If you want to know more http://en.wikipedia.org/wiki/DNA
In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". You have function with one side of the DNA (string, except for Haskell); you need to get the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).
More similar exercise are found here http://rosalind.info/problems/list-view/ (source)
DNAStrand ("ATTGC") // return "TAACG"
DNAStrand ("GTAT") // return "CATA" 
 */
const DNAStrand = dna => {
  let switchTable = {
    A: 'T',
    T: 'A',
    C: 'G',
    G: 'C'
  };
  return dna
    .split('')
    .map(a => (Object.keys(switchTable).includes(a) ? a.replace(a, switchTable[a]) : a))
    .join('');
};

//console.log(DNAStrand('AAAA')); //'TTTT'
//console.log(DNAStrand('ATTGC')); // 'TAACG'
//console.log(DNAStrand('GTAT')); // 'CATA'

/* week 7 - task 019
Complete the function that takes two numbers as input, 
num and nth and return the nth digit of num (counting from right to left).

Note
If num is negative, ignore its sign and treat it as a positive value
If nth is not positive, return -1
Keep in mind that 42 = 00042. This means that findDigit(42, 5) would return 0
Examples
findDigit(5673, 4)     returns 5
findDigit(129, 2)      returns 2
findDigit(-2825, 3)    returns 8
findDigit(-456, 4)     returns 0
findDigit(0, 20)       returns 0
findDigit(65, 0)       returns -1
findDigit(24, -8)      returns -1
 */
const findDigit = (num, nth) => {
  if (nth <= 0) {
    return -1;
  }
  return Number(Math.abs(num).toString().split('').reverse()[nth - 1]) || 0;
};
//console.log(findDigit(5673, 4), 5);
//console.log(findDigit(129, 2), 2);
//console.log(findDigit(-2825, 3), 8);
//console.log(findDigit(-456, 4), 0);
//console.log(findDigit(0, 20), 0);
//console.log(findDigit(65, 0), -1);
//console.log(findDigit(24, -8), -1);

/* week 1 - task 001
Dollars and Cents
- create a function that takes a float and return the amount formatting in dollars and cents
- add trailing zeros if they are missing
- Ex.: 3 needs to become $3.00, and 3.1 needs to become $3.10
*/
function formatMoney(amount) {
  return `$${amount.toFixed(2)}`;
}
const formatMoney2 = amount => `$${amount.toFixed(2)}`;

/* week 1 - task 002
Sum Mixed Array
- Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.
Return your answer as a number.
*/
const sumMix = x => {
  let sum = null;
  for (let y of x) {
    sum += Number(y);
  }
  return sum;
};

const sumMix2 = x => {
  return x.reduce((a, b) => Number(a) + Number(b), 0);
};

/* week 1 - task 003
Sort and Star
You will be given a vector of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.
The returned value must be a string, and have "***" between each of its letters.
You should not remove or add elements from/to the array.

mind-whiteboard:
- sort
- shift
- break strings, split on '' for characters 
*/
const twoSort = s => {
  // frist solution
  const x = '***';
  return s
    .sort()
    .shift()
    .split('')
    .map(a => a + x)
    .join('');
};
// resulted with error:
// excepted: 'b***i***t***c***o***i***n'
// my result: 'b***i***t***c***o***i***n***'  --> last character shouldn't have *** in the end
// than this is okay:
const twoSort2 = s => {
  const x = '***';
  return s.sort().shift().split('').join(x);
};

/* week 1 - task 004
Abbreviate a Two Word Name
Write a function to convert a name into initials. 
This kata strictly takes two words with one space in between them.
The output should be two capital letters with a dot separating them.
It should look like this:
Sam Harris => S.H
Patrick Feeney => P.F
*/
const abbrevName = name => {
  return name
    .split(' ')
    .map(a => a.charAt(0).toUpperCase())
    .join('.');
};

/* week 1 - task 005
Define a card suit
You get any card as an argument. Your task is to return a suit of this card.
Our deck (is preloaded):
deck = ['2♣','3♣','4♣','5♣','6♣','7♣','8♣','9♣','10♣','J♣','Q♣','K♣','A♣',
        '2♦','3♦','4♦','5♦','6♦','7♦','8♦','9♦','10♦','J♦','Q♦','K♦','A♦',
        '2♥','3♥','4♥','5♥','6♥','7♥','8♥','9♥','10♥','J♥','Q♥','K♥','A♥',
        '2♠','3♠','4♠','5♠','6♠','7♠','8♠','9♠','10♠','J♠','Q♠','K♠','A♠'];
('3♣') -> return 'clubs'
('3♦') -> return 'diamonds'
('3♥') -> return 'hearts'
('3♠') -> return 'spades'
*/
const defineSuit = card => {
  return {
    '♣': 'clubs',
    '♦': 'diamonds',
    '♥': 'hearts',
    '♠': 'spades'
  }[card.slice(-1)];
};

/* week 1 - task 006
Name Shuffler
Write a function that returns a string in which firstname is swapped with last name.
nameShuffler('john McClane'); => "McClane john"
*/
const nameShuffler = str => str.split(' ').reverse().join(' ');

/* week 1 - task 007
Stringy Strings
write me a function stringy that takes a size and returns a string of alternating '1s' and '0s'.
the string should start with a 1.
a string with size 6 should return :'101010'.
with size 4 should return : '1010'.
with size 12 should return : '101010101010'.
The size will always be positive and will only use whole numbers.
*/
const stringy = size => {
  let str = '1';
  for (let i = 1; i < size; i++) {
    str += i % 2 ? 0 : 1;
  }
  return str;
};
// cheked other solutions and I saved this also
const stringy2 = x => ''.padStart(x, '10'); // TODO: ezt még be kéne odni

/* week 1 - task 008
Write a function that rearranges an integer into its largest possible value.
Example (Input --> Output)
123456 --> 654321
105 --> 510
12 --> 21
If the argument passed through is single digit or is already the maximum possible integer, your function should simply return it.
*/
const superSize = num => {
  const x = parseInt(
      num
        .toString()
        .split('')
        .sort((a, b) => a - b)
        .reverse()
        .join('')
    ),
    sdt = 10;
  return num < sdt || num === x ? num : x;
};
superSize(1234);

/* week 1 - task 009
write a simple multiplier
*/
const multiply = (a, b) => a * b;

/* week 1 - task 010
Fake Binary
Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.
*/
const fakeBin = x => {
  return x
    .split('')
    .map(y => (y < 5 ? 0 : 1))
    .join('');
};
fakeBin('13451');

/* week 1 - task 011
You only need one - Beginner
You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.
Array can contain numbers or strings. X can be either.
Return true if the array contains the value, false if not.
*/
const check = (a, x) => a.includes(x);

/* week 1 - task 012
Remove String Spaces
Simple, remove the spaces from the string, then return the resultant string.
*/
const noSpace = x => x.replace(/\s+/g, '');

/* week 1 - task 013
Remove First and Last Character
It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.
*/
const removeChar = str => str.substring(1).slice(0, -1); // TODO: átnézni

/* week 1 - task 014
Take an Arrow to the knee, Functionally
You will be given an array of numbers which can be used using the String.fromCharCode() (JS), Tools.FromCharCode() (C#) method to convert the number to a character. It is recommended to map over the array of numbers and convert each number to the corresponding ascii character.
Use String.fromCharCode()
*/
const arrowFunc = arr => arr.map(a => String.fromCharCode(a)).join(''); //Complete this function

/* week 2 - task 015
UEFA EURO 2016
Finish the uefaEuro2016() function so it return string just like in the examples below:
uefaEuro2016(['Germany', 'Ukraine'],[2, 0]) // "At match Germany - Ukraine, Germany won!"
uefaEuro2016(['Belgium', 'Italy'],[0, 2]) // "At match Belgium - Italy, Italy won!"
uefaEuro2016(['Portugal', 'Iceland'],[1, 1]) // "At match Portugal - Iceland, teams played draw."
*/
const uefaEuro2016 = (teams, scores) => {
  const a = teams[0],
    b = teams[1];
  let draw = scores[0] === scores[1],
    winner = scores[0] > scores[1] ? a : b;
  return `At match ${a} - ${b}, ${draw ? 'teams played draw.' : winner + ' won!'}`;
};

/* week 2 - task 016
Polish alphabet
There are 32 letters in the Polish alphabet: 9 vowels and 23 consonants.
Your task is to change the letters with diacritics:
ą -> a,
ć -> c,
ę -> e,
ł -> l,
ń -> n,
ó -> o,
ś -> s,
ź -> z,
ż -> z
and print out the string without the use of the Polish letters.
For example:
"Jędrzej Błądziński"  -->  "Jedrzej Bladzinski"
*/
const correctPolishLetters = string => {
  const ch = {
    ą: 'a',
    ć: 'c',
    ę: 'e',
    ł: 'l',
    ń: 'n',
    ó: 'o',
    ś: 's',
    ź: 'z',
    ż: 'z'
  };
  return string
    .split('')
    .map(v => (v in ch ? ch[v] : v))
    .join('');
};
// console.log(correctPolishLetters('Jędrzej Błądziński'));

/* week 1 - task 017
repeatIt
Create a function that takes a string and an integer (n).
The function should return a string that repeats the input string n number of times.
If anything other than a string is passed in you should return "Not a string"
Example
"Hi", 2 --> "HiHi"
1234, 5 --> "Not a string"
*/
const repeatIt = (str, n) => (typeof str === 'string' ? str.repeat(n) : 'Not a string');

/* week 1 - task 018
Vowel remover
Create a function called shortcut to remove all the lowercase vowels in a given string.
shortcut("codewars") // --> cdwrs
shortcut("goodbye")  // --> gdby
*/
const shortcut = string => string.replace(/[aeiou]/g, ''); // TODO: átnézni

/* week 1 - task 019
Well of Ideas - Easy Version
In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.
*/
const well = x => {
  const srcStr = 'good',
    seriesLevel = 2,
    msg = { a: 'Publish!', b: 'I smell a series!', c: 'Fail!' },
    tester = x.reduce((k, v) => (v === srcStr ? k + 1 : k), 0) > seriesLevel ? msg.b : msg.a;
  return !x.includes(srcStr) ? msg.c : tester;
};
// console.log(well(['good', 'bad', 'bad', 'bad', 'bad', 'bad', 'bad', 'bad', 'good', 'bad', 'bad', 'bad', 'bad', 'bad']));

/* week 2 - task 020
The Feast of Many Beasts
All of the animals are having a feast! Each animal is bringing one dish. There is just one rule: the dish must start and end with the same letters as the animal's name. For example, the great blue heron is bringing garlic naan and the chickadee is bringing chocolate cake.
Write a function feast that takes the animal's name and dish as arguments and returns true or false to indicate whether the beast is allowed to bring the dish to the feast.
Assume that beast and dish are always lowercase strings, and that each has at least two letters. beast and dish may contain hyphens and spaces, but these will not appear at the beginning or end of the string. They will not contain numerals.
*/
const feast = (beast, dish) => {
  let xA = beast.charAt(0),
    xB = beast.slice(-1),
    yA = dish.charAt(0),
    yB = dish.slice(-1);
  return xA === yA && xB === yB;
};
//console.log(feast('great blue heron', 'garlic naan'));

/* week 1 - task 021
Find Mean
Find the mean (average) of a list of numbers in an array.
Information
To find the mean (average) of a set of numbers add all of the numbers together and divide by the number of values in the list.
For an example list of 1, 3, 5, 7
1. Add all of the numbers
1+3+5+7 = 16
2. Divide by the number of values in the list. In this example there are 4 numbers in the list.
16/4 = 4
3. The mean (or average) of this list is 4
*/

// Todo: retry
const findAverage = nums => {
  let sum = null;
  for (let x of nums) {
    sum += x;
  }
  return sum / nums.length;
};
// console.log(findAverage([1, 3, 5, 7]));

/* week 1 - task 022
Terminal game move function
In this game, the hero moves from left to right. 
The player rolls the die and moves the number of spaces indicated by the die two times.
Create a function for the terminal game that takes the current position of the hero and the roll (1-6) and return the new position.
Example:
move(3, 6) should equal 15
*/
const move = (position, roll) => position + roll * 2;
// console.log(move(0, 4));

/* week 1 - task 023
Fix the function
I created this function to add five to any number that was passed in to it and return the new value. It doesn't throw any errors but it returns the wrong number.
Can you help me fix the function?
function addFive(num) {
  var total = num + 5
  return num
}
*/
const addFive = num => num + 5;
//console.log(addFive(-5));

/* REmove duplicates */
// [...new Set(string.split(''))]

/* week 1 - task 024
The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.
What if the string is empty? Then the result should be empty object literal, {}.
*/
const count = string => {
  // TODO:: átnézni
  return string.split('').reduce((tmp, char) => ((tmp[char] = (tmp[char] || 0) + 1), tmp), {});
};
// console.log(count('aba'));

/* week 1 - task 025
Your order, please
Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.
Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).
If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.
Examples
"is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
"4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
""  -->  ""
*/
const order = words => {
  let order = {};
  words.split(' ').forEach(x => {
    order[parseInt(x.match(/\d+/g))] = x;
  });
  return Object.values(order).join(' ');
};
//console.log(order('is2 Thi1s T4est 3a'));

/* week 1 - task 026
Task
You will be given an array of numbers. You have to sort the odd tlannumbers in ascending order while leaving the even numbers at their original positions.
Examples
[7, 1]  =>  [1, 7]
[5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
[9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]
*/

// my first original attempt [...x].sort((a, b) => (a % 2 !== 0 ? a - b : 0));
const sortArray = x => {
  let odds = [...x].filter(n => n % 2).sort((a, b) => a - b),
    final = [...x],
    c = 0;
  final.forEach((v, k) => {
    if (v % 2 !== 0) {
      final[k] = odds[c];
      c++;
    }
  });
  return final;
};
// console.log(sortArray([11, 1, 2, 8, 3, 4, 5])); // 1, 3, 2, 8, 5, 4, 11

/* week 1 - task 027
Task
In this simple Kata your task is to create a function that turns a string into a Mexican Wave. You will be passed a string and you must return that string in an array where an uppercase letter is a person standing up. 
1.  The input string will always be lower case but maybe empty.
2.  If the character in the string is whitespace then pass over it as if it was an empty seat
wave("hello") => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]
*/

const wave = str => {
  let arr = [];
  [...str].map((x, n) => {
    if (x !== ' ') {
      x = str.substring(0, n) + x.toUpperCase() + str.substring(n + 1);
      arr.push(x);
    }
  });
  return arr;
};
//wave("hello") => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]
// 'Two words,tWo words,twO words,two Words,two wOrds,two woRds,two worDs,two wordS'

/* week 1 - task 028
Welcome.
In this kata you are required to, given a string, replace every letter with its position in the alphabet.
If anything in the text isn't a letter, ignore it and don't return it.
"a" = 1, "b" = 2, etc.
*/
const alphabetPosition = text => {
  const abc = String.fromCharCode(...[...Array(26)].map(_ => i++, (i = 97))),
    str = [];
  [...text].forEach(x => {
    if (x.match(/[a-z]/gi)) {
      str.push(abc.indexOf(x.toLowerCase()) + 1);
    }
  });
  return str.join(' ');
};
//The sunset sets at twelve o' clock.
// "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11
// "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11");

/* week 1 - task 029
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
const multiTable = n => {
  const max = 10;
  let str = '';
  for (let i = 1; i <= max; i++) {
    str += `${i} * ${n} = ${i * n}${i !== max ? '\n' : ''}`;
  }
  return str;
};
console.log(multiTable(5));
//multiTable(5), '1 * 5 = 5\n2 * 5 = 10\n3 * 5 = 15\n4 * 5 = 20\n5 * 5 = 25\n6 * 5 = 30\n7 * 5 = 35\n8 * 5 = 40\n9 * 5 = 45\n10 * 5 = 50')
//'1 * 5 = 5\n2 * 5 = 10\n3 * 5 = 15\n4 * 5 = 20\n5 * 5 = 25\n6 * 5 = 30\n7 * 5 = 35\n8 * 5 = 40\n9 * 5 = 45\n10 * 5 = 50'
//'1 * 5 = 52 * 5 = 103 * 5 = 154 * 5 = 205 * 5 = 256 * 5 = 307 * 5 = 358 * 5 = 409 * 5 = 4510 * 5 = 50

/* week 7 - extra task 001
Simple Pig Latin
Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.
pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway !
*/
const pigIt = str =>
  str
    .split(' ')
    .map((a, b) => a.slice(1, a.length) + a.slice(0, 1) + `${a.match(/\W/g) ? '' : 'ay'}`)
    .join(' ');
//console.log(pigIt('Pig latin is cool')); //, 'igPay atinlay siay oolcay'
//console.log(pigIt('Hello world !')); // // elloHay orldway !

/* week 7 - extra task 002
Moving Zeros To The End
Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.
moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]
*/
const moveZeros = arr => {
  let counter = [];
  arr = arr
    .map((a, b) => {
      if (a === 0) {
        counter.push(0);
      } else {
        return a;
      }
    })
    .filter(a => typeof a !== 'undefined');
  return [...arr, ...counter];
};
// console.log(moveZeros(['a', 'b', null, 'c', 'd', 1, false, 1, 3, [], 1, 9, {}, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]));
//console.log(moveZeros([1, 2, 1, 1, 3, 1, 0, 0, 0, 0]));
// ('["a","b","c","d",1,1,3,[],1,9,{},9,0,0,0,0,0,0,0,0,0,0,0]');
// ('["a","b",null,"c","d",1,false,1,3,[],1,9,{},9,0,0,0,0,0,0,0,0,0,0]');

/* week 7 - extra task 003
Valid Parentheses
Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.
Examples
"()"              =>  true
")(()))"          =>  false
"("               =>  false
"(())((()())())"  =>  true
*/
const validParentheses = parens => {
  let x = 0,
    y = 0;
  for (var i = 0; i < parens.length; i++) {
    if (parens[i] == '(') x++;
    if (parens[i] == ')') y++;
    if (x - y < 0) return false;
  }
  return x == y;
};
// console.log(validParentheses('()()()((()))()()()'), true);
//console.log(validParentheses('())'), false);
//console.log(validParentheses('()')); //, true
//console.log(validParentheses('()()()')); //
//console.log(validParentheses('()()()()()()()()'), true);
//console.log(validParentheses('()()((()))()()()()()()'), true);

/* week 7 - extra task 004
RGB To Hex Conversion
The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.
Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.
The following are examples of expected output values:
rgb(255, 255, 255) // returns FFFFFF
rgb(255, 255, 300) // returns FFFFFF
rgb(0,0,0) // returns 000000
rgb(148, 0, 211) // returns 9400D3
*/

const rgb = (r, g, b) => {
  const decToHex = color => {
    if (color > 255) return 'FF';
    else if (color < 00) return '00';
    else return color.toString(16).padStart(2, '0').toUpperCase();
  };
  return decToHex(r) + decToHex(g) + decToHex(b);
  // followed this to complete: https://www.youtube.com/watch?v=XiCsDn0tsVE
};
//console.log(rgb(0, 0, 0)); // '000000'
//console.log(rgb(0, 0, -20)); //'000000'
//console.log(rgb(300, 255, 255)); //'FFFFFF'
//console.log(rgb(173, 255, 47)); //'ADFF2F'

/* week 7 - extra task 005
Where my anagrams at?
What is an anagram? Well, two words are anagrams of each other if they both contain the same letters. For example:
'abba' & 'baab' == true
'abba' & 'bbaa' == true
'abba' & 'abbba' == false
'abba' & 'abca' == false
Write a function that will find all the anagrams of a word from a list. You will be given two inputs a word and an array with words. You should return an array of all the anagrams or an empty array if there are none. For example:
anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) => ['aabb', 'bbaa']
anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']) => ['carer', 'racer']
anagrams('laser', ['lazing', 'lazy',  'lacer']) => []
*/
const anagrams = (word, words) => {
  const sub = word.split('').sort().join('');
  let final = [];
  words.map(a => {
    if (String(a.split('').sort().join('')) === String(sub)) {
      final.push(a);
    }
  });
  return final;
};

console.log(anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer'])); //['aabb', 'bbaa']

//console.log(anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer'])); //['carer', 'racer']
//console.log(anagrams('laser', ['lazing', 'lazy', 'lacer'])); // []

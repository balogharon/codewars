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
// console.log(anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer'])); //['aabb', 'bbaa']
//console.log(anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer'])); //['carer', 'racer']
//console.log(anagrams('laser', ['lazing', 'lazy', 'lacer'])); // []

/* week 7 - extra task 007
CaesarCipher

Write a class that, when given a string, will return an uppercase string with each letter shifted forward in the alphabet by however many spots the cipher was initialized to.
For example:
var c = new CaesarCipher(5); // creates a CipherHelper with a shift of five
c.encode('Codewars'); // returns 'HTIJBFWX'
c.decode('BFKKQJX'); // returns 'WAFFLES'
If something in the string is not in the alphabet (e.g. punctuation, spaces), simply leave it as is.
The shift will always be in range of [1, 26].
*/
class CaesarCipher {
  constructor(shift) {
    this.shift = shift;
    this.chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }

  encode(str) {
    return str.replace(/[a-z]/gi, c => this.chars[(this.chars.indexOf(c.toUpperCase()) + this.shift) % 26]);
  }

  decode(str) {
    return str.replace(/[A-Z]/g, c => this.chars[(this.chars.indexOf(c) + 26 - this.shift) % 26]);
  }
}

//let ca = new CaesarCipher(5);
//console.log(ca.encode('Codewars')); //=> "Wpggh"
//console.log(ca.decode('BFKKQJX')); //=> "Canary"

/* week 7 - extra task 008
PaginationHelper
For this exercise you will be strengthening your page-fu mastery. You will complete the PaginationHelper class, which is a utility class helpful for querying paging information related to an array.
The class is designed to take in an array of values and an integer indicating how many items will be allowed per each page. The types of values contained within the collection/array are not relevant.
The following are some examples of how this class is used:
var helper = new PaginationHelper(['a','b','c','d','e','f'], 4);
*/
// The constructor takes in an array of items and a integer indicating how many
// items fit within a single page
class PaginationHelper {
  constructor(collection, itemsPerPage) {
    this.collection = collection;
    this.itemsPerPage = itemsPerPage;
  }
}

// returns the number of items within the entire collection
PaginationHelper.prototype.itemCount = function () {
  return this.collection.length;
};

// returns the number of pages
PaginationHelper.prototype.pageCount = function () {
  return Math.ceil(this.collection.length / this.itemsPerPage);
};

// returns the number of items on the current page. page_index is zero based.
// this method should return -1 for pageIndex values that are out of range
PaginationHelper.prototype.pageItemCount = function (pageIndex) {
  let leftAmount = this.itemCount() - Math.ceil(pageIndex * this.itemsPerPage);
  return leftAmount < this.itemsPerPage ? (leftAmount < 0 ? -1 : leftAmount) : this.itemsPerPage;
};

// determines what page an item is on. Zero based indexes
// this method should return -1 for itemIndex values that are out of range
PaginationHelper.prototype.pageIndex = function (itemIndex) {
  if (itemIndex < 0 || this.itemCount() - 1 < itemIndex) return -1;
  return Math.ceil((itemIndex + 1) / this.itemsPerPage) - 1;
};
let helper = new PaginationHelper(['a', 'b', 'c', 'd', 'e', 'f'], 4);
//console.log(a.pageItemCount(0));
// helper.pageCount(); //should == 2
// helper.itemCount(); //should == 6
//console.log(helper.pageItemCount(0)); //should == 4
//console.log(helper.pageItemCount(1)); // last page - should == 2
//console.log(helper.pageItemCount(2)); // should == -1 since the page is invalid
// pageIndex takes an item index and returns the page that it belongs on
//console.log(helper.pageIndex(5)); //should == 1 (zero based index)
//console.log(helper.pageIndex(2)); //should == 0
//console.log(helper.pageIndex(20)); //should == -1
//console.log(helper.pageIndex(-10)); //should == -1

/* week 7 - extra task 009
Lazy Repeater
The makeLooper() function (make_looper in Python) takes a string (of non-zero length) as an argument. It returns a function. The function it returns will return successive characters of the string on successive invocations. It will start back at the beginning of the string once it reaches the end.
For example:
var abc = makeLooper('abc');
abc(); // should return 'a' on this first call
abc(); // should return 'b' on this second call
abc(); // should return 'c' on this third call
abc(); // should return 'a' again on this fourth call
*/
const makeLooper = str => {
  let arr = str.split(''),
    counter = 0;
  return () => {
    counter >= arr.length ? (counter = 1) : counter++;
    return arr[counter < 0 ? 0 : counter - 1];
  };
};
var abc = makeLooper('abc');

//console.log(abc()); // should return 'a' on this first call
//console.log(abc()); // should return 'b' on this second call
//console.log(abc()); // should return 'c' on this third call
//console.log(abc()); // should return 'a' again on this fourth call

/* week 7 - extra task 010
Vector class
Create a Vector object that supports addition, subtraction, dot products, and norms. So, for example:

var a = new Vector([1, 2, 3]);
var b = new Vector([3, 4, 5]);
var c = new Vector([5, 6, 7, 8]);

a.add(b);      // should return a new Vector([4, 6, 8])
a.subtract(b); // should return a new Vector([-2, -2, -2])
a.dot(b);      // should return 1*3 + 2*4 + 3*5 = 26
a.norm();      // should return sqrt(1^2 + 2^2 + 3^2) = sqrt(14)
a.add(c);      // throws an error
If you try to add, subtract, or dot two vectors with different lengths, you must throw an error!

Also provide:

a toString method, so that using the vectors from above, a.toString() === '(1,2,3)' (in Python, this is a __str__ method, so that str(a) == '(1,2,3)')
an equals method, to check that two vectors that have the same components are equal
Note: the test cases will utilize the user-provided equals method.
*/

class Vector {
  constructor(components) {
    this.components = components;
    return this;
  }

  add(b) {
    if (this.components.length !== b.components.length) {
      throw Error('Vectors are not same length.');
    }
    return new Vector(
      this.components.map((v, i) => {
        return v + b.components[i];
      })
    );
  }
  subtract(b) {
    if (this.components.length !== b.components.length) {
      throw Error('Vectors are not same length.');
    }
    return new Vector(
      this.components.map((v, i) => {
        return v - b.components[i];
      })
    );
  }
  dot(b) {
    if (this.components.length !== b.components.length) {
      throw Error('Vectors are not same length.');
    }
    return new Vector(
      this.components
        .map((v, i) => {
          return v * b.components[i];
        })
        .reduce((a, b) => a + b)
    ).components;
  }
  norm() {
    return Math.sqrt(
      this.components
        .map((v, i) => {
          return v * v;
        })
        .reduce((a, b) => a + b)
    );
  }
  equals(b) {
    if (this.components.length !== b.components.length) {
      return false;
    }

    for (var i = 0, length = this.components.length; i < length; i++) {
      if (this.components[i] !== b.components[i]) {
        return false;
      }
    }

    return true;
  }

  toString() {
    return '(' + this.components.join(',') + ')';
  }
}

/* week 7 - extra task 011 
Simple Events

Your goal is to write an Event constructor function, which can be used to make event objects.

An event object should work like this:

it has a .subscribe() method, which takes a function and stores it as its handler
it has an .unsubscribe() method, which takes a function and removes it from its handlers
it has an .emit() method, which takes an arbitrary number of arguments and calls all the stored functions with these arguments
As this is an elementary example of events, there are some simplifications:

all functions are called with correct arguments (e.g. only functions will be passed to unsubscribe)
you should not worry about the order of handlers' execution
the handlers will not attempt to modify an event object (e.g. add or remove handlers)
the context of handlers' execution is not important
each handler will be subscribed at most once at any given moment of time. It can still be unsubscribed and then subscribed again
Also see an example test fixture for suggested usage
*/

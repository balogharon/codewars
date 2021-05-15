/* week 1 - task 002
Sum Mixed Array
- Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.
Return your answer as a number.
*/

/* week 1 - task 007
Stringy Strings
write me a function stringy that takes a size and returns a string of alternating '1s' and '0s'.
the string should start with a 1.
a string with size 6 should return :'101010'.
with size 4 should return : '1010'.
with size 12 should return : '101010101010'.
The size will always be positive and will only use whole numbers.
*/

/* week 1 - task 011
You only need one - Beginner
You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.
Array can contain numbers or strings. X can be either.
Return true if the array contains the value, false if not.
*/

/* week 1 - task 013
Remove First and Last Character
It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.
*/

/* week 1 - task 018
Vowel remover
Create a function called shortcut to remove all the lowercase vowels in a given string.
shortcut("codewars") // --> cdwrs
shortcut("goodbye")  // --> gdby
*/

/* week 1 - task 019
Well of Ideas - Easy Version
In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.
*/

/* REmove duplicates */
// [...new Set(string.split(''))]

/* week 1 - task 024
The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.
What if the string is empty? Then the result should be empty object literal, {}.
*/

/* week 1 - task 027
Task
In this simple Kata your task is to create a function that turns a string into a Mexican Wave. You will be passed a string and you must return that string in an array where an uppercase letter is a person standing up. 
1.  The input string will always be lower case but maybe empty.
2.  If the character in the string is whitespace then pass over it as if it was an empty seat
wave("hello") => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]
*/

/* week 2 - task 002
Find the smallest integer in the array
Given an array of integers your solution should find the smallest integer.
For example:
Given [34, 15, 88, 2] your solution will return 2
Given [34, -345, -1, 100] your solution will return -345
You can assume, for the purpose of this kata, that the supplied array will not be empty.
*/

/* week 2 - task 013
Filling an array (part 1)
We want an array, but not just any old array, an array with contents!
Write a function that produces an array with the numbers 0 to N-1 in it.
For example, the following code will result in an array containing the numbers 0 to 4:
arr(5) // => [0,1,2,3,4]
Note: The parameter is optional. So you have to give it a default value.
}*/

/* week 2 - task 016
Find numbers which are divisible by given number
Complete the function which takes two arguments and returns all numbers which are divisible by the given divisor. First argument is an array of numbers and the second is the divisor.
divisibleBy([1, 2, 3, 4, 5, 6], 2) == [2, 4, 6]
}*/

/* week 3 - task 004
Sum of positive
You get an array of numbers, return the sum of all of the positives ones.
Example [1,-4,7,12] => 1 + 7 + 12 = 20
Note: if there is nothing to sum, the sum is default to 0.
*/
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

/* week 3 - task 009 
Reversed sequence
Build a function that returns an array of integers from n to 1 where n>0.
Example : n=5 --> [5,4,3,2,1]
*/

/* week 3 - task 016
A function within a function
Given an input n, write a function always that returns a function which returns n. Ruby should return a lambda or a proc.
var three = always(3);
three(); // returns 3
*/

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

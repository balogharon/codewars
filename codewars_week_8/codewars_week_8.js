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

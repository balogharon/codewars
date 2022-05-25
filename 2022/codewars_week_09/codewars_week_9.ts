/* week 9 - task 001 
Dollars and Cents 
The company you work for has just been awarded a contract to build a payment gateway. In order to help move things along, you have volunteered to create a function that will take a float and return the amount formatting in dollars and cents.
39.99 becomes $39.99
*/
const formatMoney = (amount: any) => `$${parseFloat(amount).toFixed(2)}`;

/* week 9 - task 002 
Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.
Return your answer as a number.
*/
const sumMix = (x: any[]): number => x.reduce((a: any, b: any) => parseInt(a) + parseInt(b));

/* week 9 - task 003
In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.
*/
const filter_list = (l: any[]) => l.filter((x: number | string) => typeof x !== 'string');

/* week 9 - task 004
You will be given a vector of strings.
You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.
The returned value must be a string, and have "***" between each of its letters.
You should not remove or add elements from/to the array.
*/
export const twoSort = (s: string[]): string[] => {
  console.log(s);
  return s;
};

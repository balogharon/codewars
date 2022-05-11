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
export const sumMix = (x: any[]) => x.reduce((a: any, b: any) => parseInt(a) + parseInt(b));

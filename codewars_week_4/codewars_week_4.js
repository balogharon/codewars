/* week 4 - task 001
Number of People in the Bus
Number of people in the bus
There is a bus moving in the city, and it takes and drop some people in each bus stop.
You are provided with a list (or array) of integer arrays (or tuples). Each integer array has two items which represent number of people get into bus (The first item) and number of people get off the bus (The second item) in a bus stop.
Your task is to return number of people who are still in the bus after the last bus station (after the last array). Even though it is the last bus stop, the bus is not empty and some people are still in the bus, and they are probably sleeping there :D
Take a look on the test cases.
Please keep in mind that the test cases ensure that the number of people in the bus is always >= 0. So the return integer can't be negative.
The second value in the first integer array is 0, since the bus is empty in the first bus stop.
// TODO:: újracsinálni
*/

const number = busStops => {
  let on = 0,
    off = 0;
  busStops.forEach(people => {
    on += people[0];
    off += people[1];
  });
  return on - off;
};
/*console.log(
  number([
    [10, 0],
    [3, 5],
    [5, 8]
  ]),
  5
);*/

/* week 4 - task 002
Determine offspring sex based on genes XX and XY chromosomes
The male gametes or sperm cells in humans and other mammals are heterogametic and contain one of two types of sex chromosomes. They are either X or Y. The female gametes or eggs however, contain only the X sex chromosome and are homogametic.
The sperm cell determines the sex of an individual in this case. If a sperm cell containing an X chromosome fertilizes an egg, the resulting zygote will be XX or female. If the sperm cell contains a Y chromosome, then the resulting zygote will be XY or male.
Determine if the sex of the offspring will be male or female based on the X or Y chromosome present in the male's sperm.
If the sperm contains the X chromosome, return 
"Congratulations! You're going to have a daughter."; If the sperm contains the Y chromosome, return "Congratulations! You're going to have a son.";
*/
const chromosomeCheck = sperm => {
  let msg = "Congratulations! You're going to have a ";
  return sperm.includes('Y') ? msg + 'son.' : msg + 'daughter.';
};
// console.log(chromosomeCheck('XY'));

/* week 4 - task 003
Merge two sorted arrays into one
You are given two sorted arrays that both only contain integers. Your task is to find a way to merge them into a single one, sorted in asc order. Complete the function mergeArrays(arr1, arr2), where arr1 and arr2 are the original sorted arrays.
You don't need to worry about validation, since arr1 and arr2 must be arrays with 0 or more Integers. If both arr1 and arr2 are empty, then just return an empty array.
Note: arr1 and arr2 may be sorted in different orders. Also arr1 and arr2 may have same integers. Remove duplicated in the returned result.

Examples
arr1 = [1, 2, 3, 4, 5];
arr2 = [6, 7, 8, 9, 10];
mergeArrays(arr1, arr2);  // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

arr3 = [1, 3, 5, 7, 9];
arr4 = [10, 8, 6, 4, 2];
mergeArrays(arr3, arr4);  // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

arr5 = [1, 3, 5, 7, 9, 11, 12];
arr6 = [1, 2, 3, 4, 5, 10, 12];
mergeArrays(arr5, arr6);  // [1, 2, 3, 4, 5, 7, 9, 10, 11, 12]
*/
const mergeArrays = (arr1, arr2) => [...new Set([...arr1, ...arr2].sort((a, b) => a - b))];
// console.log(mergeArrays([1, 3, 5, 7, 9, 11, 12], [1, 2, 3, 4, 5, 10, 12]));

/* week 4 - task 004
Cat years, Dog years

Kata Task
I have a cat and a dog.
I got them at the same time as kitten/puppy. That was humanYears years ago.
Return their respective ages now as [humanYears,catYears,dogYears]

NOTES:

humanYears >= 1
humanYears are whole numbers only
Cat Years
15 cat years for first year
+9 cat years for second year
+4 cat years for each year after that
Dog Years
15 dog years for first year
+9 dog years for second year
+5 dog years for each year after that
*/
const humanYearsCatYearsDogYears = humanYears => {
  let y = [15, 9],
    sum = 0,
    cat = 4,
    dog = 5,
    arr = [...Array(humanYears).keys()];
  arr.forEach(num => {
    if (num === 0 || num === 1) {
      sum += y[num];
    }
  });
  return [humanYears, sum + cat * (arr.length - 2), sum + dog * (arr.length - 2)];
};
// console.log(humanYearsCatYearsDogYears(1));

/* week 4 - task 005
Capitalization and Mutability
Your coworker was supposed to write a simple helper function to capitalize a string (that contains a single word) before they went on vacation.
Unfortunately, they have now left and the code they gave you doesn't work. Fix the helper function they wrote so that it works as intended (i.e. make the first character in the string "word" upper case).
Don't worry about numbers, special characters, or non-string types being passed to the function. The string lengths will be from 1 character up to 10 characters, but will never be empty.
*/

const capitalizeWord = word => word.charAt(0).toUpperCase() + word.slice(1);
// console.log(capitalizeWord('aron'));

/* week 4 - task 006
Difference of Volumes of Cuboids
In this simple exercise, you will create a program that will take two lists of integers, a and b. Each list will consist of 3 positive integers above 0, representing the dimensions of cuboids a and b. You must find the difference of the cuboids' volumes regardless of which is bigger.
For example, if the parameters passed are ([2, 2, 3], [5, 4, 1]), the volume of a is 12 and the volume of b is 20. Therefore, the function should return 8.
Your function will be tested with pre-made examples as well as random ones.
If you can, try writing it in one line of code.
*/

const findDifference = (a, b) => Math.abs(a.reduce((a, b) => a * b) - b.reduce((a, b) => a * b));
// console.log(findDifference([5, 21, 26], [1, 19, 3]));

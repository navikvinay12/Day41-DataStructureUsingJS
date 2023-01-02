//Welcome to some basic problems on Data Structure Using JavaScript for the given questions as per next UCs.

const prompt = require("prompt-sync")();        //importing package to use prompt for taking user input .
// Q1) Write a program in the following steps
// a. Generates 10 Random 3 Digit number.
// b. Store this random numbers into a array.
// c. Then find the 2nd largest and the 2nd smallest element WITHOUT sorting the array.
let numbers = [];
for (let i = 0; i < 10; i++) 
{
  numbers.push(Math.floor(Math.random() * 900) + 100);
}
console.log(numbers); 
let largest = secondLargest = Number.MIN_SAFE_INTEGER;
let smallest = secondSmallest = Number.MAX_SAFE_INTEGER;
for (let i = 0; i < numbers.length; i++)
{
  if (numbers[i] > largest) {
    secondLargest = largest;
    largest = numbers[i];
  } else if (numbers[i]>secondLargest && numbers[i]!=largest) {
    secondLargest = numbers[i];
  }

  if (numbers[i] < smallest) {
    secondSmallest = smallest;
    smallest = numbers[i];
  } else if (numbers[i] < secondSmallest && numbers[i]!=smallest) {
    secondSmallest = numbers[i];
  }
}
console.log(`Second largest: ${secondLargest}`);
console.log(`Second smallest: ${secondSmallest}`);
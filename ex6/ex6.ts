"use strict";
// The sum of the squares of the first ten natural numbers is 1^2 + 2^2 + ... + 10^2 = 385
// The square of the sum of the first ten natural numbers is (1 + 2 + ... + 10)^2 = 55^2 = 3025
// Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 - 385 = 2640
// Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum
const calc = function (num: number): number {
  let sum = 0;
  let squareSum = 0;

  for (let i = 0; i <= num; i++) {
    sum += i ** 2;
    squareSum += i;
  }

  return squareSum ** 2 - sum;
};

const result = calc(100);
console.log(`Result = ${result}`);
// Answer: 25164150

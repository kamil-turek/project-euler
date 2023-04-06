"use strict";
// 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
// What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
let counter = 2520;
let divisors = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

function findSmallestNumber(counter: number, divisors: number[]): number {
  while (true) {
    if (divisors.every((divisor) => counter % divisor === 0)) {
      break;
    }

    counter += 2520;
  }

  return counter;
}

const result = findSmallestNumber(counter, divisors);
console.log(`Result = ${result}`); // answer: 232792560

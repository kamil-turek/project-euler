"use strict";
// The prime factors of 13195 are 5, 7, 13 and 29.
// What is the largest prime factor of the number 600851475143?
let numberToCheck = 3453;
let exitLoop = false;
let result!: number;

function largestPrimeFactor(numberToCheck: number): number {
  while (!exitLoop) {
    for (let i = 1; i <= numberToCheck; i++) {
      if (numberToCheck % i === 0 && i !== 1) {
        numberToCheck /= i;
        if (numberToCheck !== 1) result = numberToCheck;
        if (numberToCheck === 1) exitLoop = true;
        break;
      }
    }
  }
  return result;
}

console.log(`Result = ${largestPrimeFactor(numberToCheck)}`);

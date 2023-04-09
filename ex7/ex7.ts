"use strict";
// By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.
// What is the 10001st prime number?

let counter = 2;
const primeNumbers: number[] = [];
const end = 10001;

function isPrime(n: number): boolean {
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

while (primeNumbers.length < end) {
  if (counter > 2 && counter % 2 === 0) {
    counter++;
    continue;
  }

  if (isPrime(counter)) {
    primeNumbers.push(counter);
  }

  counter++;
}

console.log(`Result = ${primeNumbers[end - 1]}`); // Answer: 104743

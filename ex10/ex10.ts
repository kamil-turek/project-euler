"use strict";

// The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.
// Find the sum of all the primes below two million.
const LIMIT = 2000000;

// Creates arr of prime numbers
function setPrimeNumbersArr(): number[] {
  const primeNumbers: number[] = [];

  for (let i = 2; i <= LIMIT; i++) {
    if (isPrime(i)) primeNumbers.push(i);
  }

  return primeNumbers;
}

// Checks if number is prime
function isPrime(n: number): boolean {
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }

  return true;
}

// Counts sum of prime numbers
function countSum(): number {
  const primeNumbers = setPrimeNumbersArr();

  const result = primeNumbers.reduce((acc, curr) => acc + curr, 0);

  return result;
}

console.log(`Result = ${countSum()}`); // Answer: 142913828922

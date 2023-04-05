"use strict";

// A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
// Find the largest palindrome made from the product of two 3-digit numbers.

// Compilation to ES6
// npx tsc --target es6 ex4/ex4.ts

const palindromeProducts: number[] = [];
const startNumber = 100;
const endNumber = 999;

function isPalindrome(num: string): boolean {
  if (num[0] === num[num.length - 1]) {
    if (num[1] === num[num.length - 2]) {
      if (num.length === 5) return true;

      if (num[2] === num[3]) return true;
    }
  }
  return false;
}

for (let firstNum = startNumber; firstNum <= endNumber; firstNum++) {
  for (let secondNum = startNumber; secondNum <= endNumber; secondNum++) {
    const result = firstNum * secondNum;
    if (isPalindrome(result.toString())) palindromeProducts.push(result);
  }
}

let max = palindromeProducts[0];

for (let i = 1; i < palindromeProducts.length; i++) {
  if (palindromeProducts[i] > max) max = palindromeProducts[i];
}

console.log(`Result = ${max}`);

// Answer 906609

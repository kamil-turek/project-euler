"use strict";

// A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,
// a^2 + b^2 = c^2
// For example, 3^2 + 4^2 = 9 + 16 = 25 = 5^2.
// There exists exactly one Pythagorean triplet for which a + b + c = 1000.
// Find the product abc.

const LIMIT = 500;
let product!: number;

function pythagoreanMultiplier() {
  for (let i = 3; i <= LIMIT; i++) {
    for (let j = i + 1; j <= LIMIT; j++) {
      const k = Math.sqrt(i ** 2 + j ** 2);
      if (i + j + k === 1000) {
        product = i * j * k;
      }
    }
  }

  console.log(`Product of abc = ${product}`); // Answer: 31875000
}

pythagoreanMultiplier();

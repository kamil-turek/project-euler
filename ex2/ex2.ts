"use strict";

// Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:
// 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
// By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.

const limit = 4000000;

function evenTerms(limit: number): number[] {
  const evenTermsArr: number[] = [];
  let term1 = 1;
  let term2 = 2;
  let term: number;

  for (let i = 0; i < limit; i++) {
    term = term1 + term2;
    term1 = term2;
    term2 = term;

    if (term >= limit) break;

    if (term % 2 !== 0) continue;

    evenTermsArr.push(term);
  }

  return evenTermsArr;
}

const evenTermsArr: number[] = evenTerms(limit);
const result: number = evenTermsArr.reduce((a, b) => a + b, 2);

console.log(`Result = ${result}`);

// Answer: 4613732

// Write a program to store first n prime numbers in an array . After storing return the array.﻿

// Input:-
// n=5
// Output:- Return the output in the form of an array.
// 2
// 3
// 5
// 7
// 11

let n = 5;
let arr = [];
let currNumb = 2;

while (arr.length < n) {
  let primeNum = true;

  for (let i = 2; i <= Math.sqrt(currNumb); i++) {
    if (currNumb % i === 0) {
      primeNum = false;
      break;
    }
  }

  if (primeNum) {
    arr.push(currNumb);
  }

  currNumb++;
}

console.log(arr);

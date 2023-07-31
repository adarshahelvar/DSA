// Write a program to print whether a given number is an Armstrong number or not..
// (Armstrong number is a number in which all the sum of cubes of digits is equal to the number
// Example:-
// Input :- n=153
// Output:-true
// Logic - 153 is an Armstrong number because 1^3 + 5^3 + 3^3 = 1 +125 + 27 = 153 which is equal to the original number )
// 1634 = 1^4+6^4 + 3^4+ 4^4
const a = 370;
x = 370;
let sum = 0;
while (x > 0) {
  let reminder = x % 10;
  sum = sum + (reminder * reminder * reminder);
  x = Math.floor(x / 10);
}

if (a === sum) {
  console.log("true");
} else {
  console.log(false);
}



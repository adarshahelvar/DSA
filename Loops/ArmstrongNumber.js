// Write a program to print whether a given number is an Armstrong number or not..
// (Armstrong number is a number in which all the sum of cubes of digits is equal to the number
// Example:-
// Input :- n=153
// Output:-true
// Logic - 153 is an Armstrong number because 1^3 + 5^3 + 3^3 = 1 +125 + 27 = 153 which is equal to the original number )
// 1634 = 1^4+6^4 + 3^4+ 4^4


function isArmstrongNumber(n) {
  const numString = n.toString();
  const nLength= numString.length;
  let originalNumber = n;
  let sum = 0;
   

  while (n > 0) {
    let digit = n % 10;
    sum += Math.pow(digit, nLength); 
    n = Math.floor(n / 10);
  }

  if (sum === originalNumber) {
    return true;
  } else {
    return false;
  }
}

// Test cases
console.log(isArmstrongNumber(153)); // true
console.log(isArmstrongNumber(1634)); // true
console.log(isArmstrongNumber(408)); //false 




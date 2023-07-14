// Write a program to print the digits of a number using while loop .
// Input:-
// N - 153 .

// output:-
// 3
// 5
// 1

x = 153;
while (x > 0) {
  let y = x % 10;
  console.log(y);
  x = Math.floor(x / 10);
}


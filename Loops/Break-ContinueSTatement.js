// Write a program to print even numbers from 1 to n except numbers which are divisible by 4. 
// Use Continue statement to avoid printing.
// Input:=10
// Output
// 2
// 6
// 10

let n = 5;
for (let i = 0; i <= n; i++) {
  if (i % 4 == 0) {
    continue;
  }
  console.log(i);
}



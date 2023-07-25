// Given an array. We define a running sum of an array.
// Return the running sum of nums.
// Input: nums = [1,2,3,4]
// Output: [1,3,6,10]
// Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].

let arr = [1, 2, 3, 4];
let outputArr = [];
for (let i = 0; i < arr.length; i++) {
  let sum = 0;
  for (let j = 0; j <= i; j++) {
    sum = sum + arr[j];
  }
  outputArr.push(sum);
}
console.log(outputArr);

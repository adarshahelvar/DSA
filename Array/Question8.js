// Given an array of positive integers arr, return the sum of all possible odd-length subarrays of arr.
// Example 1:

// Input: arr = [1,4,2,5,3]
// Output: 58
// Explanation: The odd-length subarrays of arr and their sums are:
// [1] = 1
// [4] = 4
// [2] = 2
// [5] = 5
// [3] = 3
// [1,4,2] = 7
// [4,2,5] = 11
// [2,5,3] = 10
// [1,4,2,5,3] = 15
// If we add all these together we get 1 + 4 + 2 + 5 + 3 + 7 + 11 + 10 + 15 = 58
// Example 2:

// Input: arr = [1,2]
// Output: 3
// Explanation: There are only 2 subarrays of odd length, [1] and [2]. Their sum is 3.
// Example 3:

// Input: arr = [10,11,12]
// Output: 66

let arr = [1, 4, 2, 5, 3];
let count = 0;
//help to select first pointer
for (let i = 0; i < arr.length; i++) {
  // help to select second pointer
  for (let j = i; j < arr.length; j++) {
    //it only count the subarrays which have odd length
    if ((i - j) % 2 == 0) {
      // looping from start point to end point and adding them
      for (let k = i; k <= j; k++) {
        count += arr[k];
      }
    }
  }
}
console.log(count);

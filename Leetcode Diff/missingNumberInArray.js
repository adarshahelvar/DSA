/*
Given an array of numbers between 1 to 9, it is an unsorted array.
Find the missing number when it is sorted and if the number is missing return 1 else return 0.

Example 1:
Input: nums = [4,2,5,3]
Output: 0
Explanation: nums is already continuous.

Example 2:
Input: nums = [1,2,3,5,6]
Output: 1
Explanation: 4 is missing in series, One possible solution is to change the last element to 4.
The resulting array is [1,2,3,5,4], which is continuous.
*/

let nums = [1, 2, 3,4];
let fun = () => {
  // let sortedElms = nums.sort();
  // If the numsers given is more than 10 like 10,11,12,15 etc then we can sort like this 
  let sortedElms = nums.sort(function(a,b) { return a - b; });
  let ans;

  for (let i = 0; i < sortedElms.length; i++) {
    if (sortedElms[i + 1] === sortedElms[i] + 1) {
      continue;
    } else {
      ans = sortedElms[i + 1];
      break;
    }
  }
  if (ans === undefined) {
    return 0;
  } else {
    return 1;
  }
};
console.log(fun());

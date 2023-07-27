// Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.
/*
Example 1:

Input: nums1 = [1,3], nums2 = [2]
Output: 2.00000
Explanation: merged array = [1,2,3] and median is 2.
Example 2:

Input: nums1 = [1,2], nums2 = [3,4]
Output: 2.50000
Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.
*/

let nums1 = [1,3];
let nums2 = [2];

// Approch 1

let twoArrayMerging = nums1.concat(nums2);
let sortingMergedArray = twoArrayMerging.sort();
let arrayLength = sortingMergedArray.length;
if (arrayLength % 2 !== 0) {
  let mean = (arrayLength - 1) / 2;
  console.log (sortingMergedArray[mean]);
} else {
  let firstElm = sortingMergedArray[arrayLength / 2];
  let secondElm = sortingMergedArray[arrayLength / 2 - 1];
  let mean = (firstElm + secondElm) / 2;
  console.log (mean);
}



    // Approch 2
    // let nums = nums1.concat(nums2);
    // let length = nums.length;

    // nums.sort((a, b) => { return a - b});
        
    // if (length%2 === 1) {
    //      return nums[(length-1)/2];    
    // }
    
    // return (nums[length/2-1] + nums[length/2])/2;
     



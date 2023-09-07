/*
Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.
You must write an algorithm with O(log n) runtime complexity.

 

Example 1:

Input: nums = [1,3,5,6], target = 5
Output: 2
Example 2:

Input: nums = [1,3,5,6], target = 2
Output: 1
Example 3:

Input: nums = [1,3,5,6], target = 7
Output: 4
*/

//  This approach uses O(n) complexity
let nums = [1, 3, 5, 6];
let target = 5;
let left = 0;
let index = nums.length - 1;
while (left <= nums.length) {
  if (nums[left] > target && nums[left - 1] < target) {
    return left;
    break;
  } else if (target === nums[left]) {
    return left;
    break;
  } else if (target > nums[index]) {
    return nums.length;
    break;
  } else {
    left++;
  }
}

/*
//  This approach uses O(log n) complexity 

    let nums = [1,3,5,6];
    let target = 5;
    let left = 0;
        let right = nums.length - 1;
    
        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
    
            if (nums[mid] === target) {
                return mid; // Target element found at index mid
            } else if (nums[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
    
        return left;
    

    */

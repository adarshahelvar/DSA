/*  
Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.
If target is not found in the array, return [-1, -1].
You must write an algorithm with O(log n) runtime complexity.

Example 1:
Input: nums = [5,7,7,8,8,10], target = 8
Output: [3,4]

Example 2:
Input: nums = [5,7,7,8,8,10], target = 6
Output: [-1,-1]
Example 3:

Input: nums = [], target = 0
Output: [-1,-1]

*/

var searchRange = function(nums, target) {

    let empArr= []
    
    let left = 0;
    let right = nums.length -1;
    while (left <= right){
      if(nums[left] !==target){
        left++
      }else {
        empArr.push(left);
        break;
      }
    }
    while(right>=0){
      if(nums[right] !== target){
        right--;
      }else {
        empArr.push(right)
        break;
      }
    }
    if(empArr.length<=0){
      return([-1,-1]) 
    }else {
    return(empArr)
    }
    
    };

    console.log(searchRange([5,7,7,8,8,10],8))
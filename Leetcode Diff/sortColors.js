/*
Given an array nums with n objects colored red, white, or blue, sort them in-place so 
that objects of the same color are adjacent, with the colors in the order red, white, and blue.
We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.

Example 1:
Input: nums = [2,0,2,1,1,0]
Output: [0,0,1,1,2,2]

Example 2:
Input: nums = [2,0,1]
Output: [0,1,2]

*/


let nums = [2,0,2,1,1,0];
function arr(){
  let empArr = [];
    for (let i=0;i<nums.length;i++){
        for (let j=0;j<nums.length;j++){
            if(i === nums[j]){
                empArr.push(nums[j])
            }
        }
    }
    return(empArr)
}
console.log(arr())
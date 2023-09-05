/*
Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.

See image for example
Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6
Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.
Example 2:

Input: height = [4,2,0,3,2,5]
Output: 9
*/
import problemIMage from '../Images/rainwatertrap.png';

// Edge cases:
// 1. if we have only one block then we can not store water.
// 2. if we have two block then we can not store water.
// 3. We need min of 3 blocks to store water

// 4. If block or elements are in ascending or decending order we can not store water
// 5. Water can not store in first and last elemenet


/* THIS IS TWO PINTER SOLUTION */
const n = height.length;
    let left = 0;
    let right = n - 1;
    let lMax = 0;
    let rMax = 0;
    let ans = 0;
    
    while (left < right) {
        if (height[left] < height[right]) {
            if (height[left] >= lMax) {
                lMax = height[left]
            } else {
                ans += lMax - height[left];
            }
            left += 1;
        } else {
            if (height[right] >= rMax) {
                rMax = height[right]
            } else {
                ans += rMax - height[right];
            }
            right -= 1;
        }
    }
    return ans;
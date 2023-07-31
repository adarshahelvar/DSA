// Given an integer x, return true if x is a palindrome and false otherwise.
/* Example 1:

Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.

Example 2:
Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.

Example 3:
Input: x = 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
*/


var isPalindrome = function(x) {
    let temp = x;
    let revNuber = 0;

while (temp > 0) {
  let modulo = temp % 10;
  revNuber = revNuber * 10 + modulo;
  temp = Math.floor(temp / 10);
}
if(revNuber === x){
  return(true)
}else {
  return(false)
}

};

console.log(isPalindrome(151));
console.log(isPalindrome(153));
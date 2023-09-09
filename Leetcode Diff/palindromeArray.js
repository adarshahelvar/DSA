/*
Given an array of elements of length n, check its palindrome or not 
*/

// Method 1
let head = [1, 2, 2, 1];

let empArr = [];
let ln = head.length - 1;
let lm = head.length / 2;

let start = 0;
let end = ln;
while (start < end) {
  if (head[start] === head[end]) {
    empArr.push(head[end]);
  }
  start++;
  end--;
}
if (empArr.length === lm) {
  console.log(`Given array is palindrome`);
} else {
  console.log(`Given array is Not palindrome`);
}

// Method 2
function isPalindrome(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    if (arr[left] !== arr[right]) {
      return false;
    }
    left++;
    right--;
  }

  return true;
}

// Example usage:
const array1 = [1, 2, 2, 1];
console.log(isPalindrome(array1)); // true

const array2 = [1, 2, 3, 4, 5];
console.log(isPalindrome(array2)); // false

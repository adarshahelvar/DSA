/*
Remove the duplicate number from an array.
Input:- let arr = [1, 30, 505, 30, 1];
Output :- [1,30,505]
*/

let arr = [1, 30, 505, 30, 1];

// Approch 1

const removeDuplicateElm = [];
for (let i = 0; i < arr.length; i++) {
  let isDuplicate = false;
  for (let j = 0; j < removeDuplicateElm.length; j++) {
    if (arr[i] === removeDuplicateElm[j]) {
      isDuplicate = true;
      break;
    }
  }
  if (!isDuplicate) {
    removeDuplicateElm.push(arr[i]);
  }
}
console.log(removeDuplicateElm);




// Approch 2
/*
const removeDuplicateElm = [];
for (let i = 0; i < arr.length; i++) {
  if (removeDuplicateElm.indexOf(arr[i]) === -1) {
    removeDuplicateElm.push(arr[i]);
  }
}
console.log(removeDuplicateElm);
*/


// Approch 3
/*
let removeDuplicateElm = [...new Set(arr)];
console.log(removeDuplicateElm);
*/
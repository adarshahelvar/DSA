/* 
Remove duplicate element from an given array and return an no  duplicate element index.
Cases:
The given array is sorted.
The given array has only one non duplicate element.
There should be no negative values inside array.

Ime complexity should be O(n)
*/

// Given array is arr = [0,0,1,1,1,2,2,3,3,4];
// Output shold be 5
// explination: array after removing duplicate elements is [0, 1, 2, 3, 4]
let arr = [0,0,1,1,1,2,2,3,3,4];
let empArr = [];
let setArr = ([...new Set(arr)])
for(let i=0;i<arr.length;i++){
  if(!empArr.includes(arr[i])){
    if(arr[i]!==arr[i+1] && arr[i]!==arr[i-1]){
    empArr.push(arr[i])
    }
  }
}
let ind = setArr.indexOf(...empArr)
let term = ind+1;
console.log(term)
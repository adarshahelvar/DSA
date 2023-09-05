// Given an array and rotation, Shift the elements to the right to that rotation
// Input:- [1, 2, 3, 4, 5];
// rotation: 2
// Output:- [3, 4, 5, 1, 2]

let arr = [1, 2, 3, 4, 5];
let rot = 2;
let newArr = [];
let newArr2 = [];
for (let i = 0; i < arr.length; i++) {
  if (i < rot) {
    newArr.push(arr[i]);
  }
  if (i >= rot) {
    newArr2.push(arr[i]);
  }
}
let altr = newArr2.concat(newArr);
console.log(altr)


/* 
    Explanation:
    Here i took two empty so that i can store first elements which are comes under rotation part (here taht is 1,2)
    and for second array i.e 3,4,5

    in first if condition i am consider elements which are less that rotation and placing them inside my array 1
    in second if condition i am consider elements which are next to rotation cycle.
    after getting two array elements i am merging both of them with the help of concat method
*/ 
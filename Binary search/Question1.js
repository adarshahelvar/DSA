/* Find the max in an array with the help of Binary search*/

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
let leng = arr.length;
let heigh = leng - 1; //10
let low = 0;
let max;
while (heigh >= low) {
  let mid = (low + heigh) / 2;
  mid = Math.floor(mid);
  if (arr[mid] < arr[heigh]) {
    low = mid + 1;
  } else if (arr[mid] === arr[heigh]) {
    max = mid;
    break;
  } else {
    heigh = mid;
  }
}
console.log("Max value at an index of" + " " + max);
console.log(arr[max]);

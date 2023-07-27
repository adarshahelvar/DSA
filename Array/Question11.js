// Selection Sort
// Write a program to sort the array order using Insertion sort 
// Input:[7,10,9,2,55,3,6];
// Output: [2,  3,  6, 7,9, 10, 55]
let arr = [7,10,9,2,55,3,6];
for(let i=0; i<arr.length; i++){
    let samllest = i;
    for(let j=i+1; j<arr.length; j++){
        if(arr[samllest]>arr[j]){
            samllest = j;
        }
    }
    let temp = arr[samllest];
    arr[samllest] = arr[i];
    arr[i] = temp;
}
console.log(arr)
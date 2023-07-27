// Write a program to sort the array using Insertion sort algorithm.
// Input:-[7,10,9,2,55,3,6];
// Output:-[2,  3,  6, 7, 9, 10, 55]


let arr = [7,10,9,2,55,3,6];
for(let i=1; i<arr.length; i++){
    sortedElement = arr[i];
    let j = i-1;
    while(j>=0 && sortedElement<arr[j]){
        arr[j+1] = arr[j]
        j--;
    }
    arr[j+1] = sortedElement;
}
console.log(arr)

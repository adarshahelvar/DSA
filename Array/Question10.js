// Bubble Sort
// Write a program to sort the array in Decending  order using Bubble sort algorithm. 
// Input:-[15,10,1,5,99,201];
// Output:-[ 201, 99, 15, 10, 5, 1 ]



let arr = [15,10,1,5,99,201];

for(let i=0;i<arr.length;i++){
    for(let j=0;j<arr.length-1;j++){
        // Swaping 
        if(arr[j]<arr[j+1]){
        let temp = arr[j];
        arr[j]=arr[j+1];
        arr[j+1] = temp;
        }
        
    }
}
    console.log(arr)
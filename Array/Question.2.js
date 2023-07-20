// Given an array find the maximum in it

let arr = [10,50,2,88,100,1,22];
let max = arr[0];
let min = arr[0];

for (let i = 0; i < arr.length; i++){
    if(arr[i]>max){
        max = arr[i];
    }
    if(arr[i]<min){
        min = arr[i];
    }
}
console.log("Max is " + max+ " " + "Min is "+min);
// write the code to print all the subarrays possible. 
// Note - print in the similar way as given here.
// Input:- [1,2,3,4,5]
// Output:-
// 1
// 12
// 123
// 1234
// 12345
// 2
// 23
// 234
// 2345
// 3
// 34
// 345
// 4
// 45
// 5

let arr = [1, 2, 3, 4, 5];

for (let i = 0; i <= arr.length; i++) {
  let num = "";

  for (let j = i; j < arr.length; j++) {
    for (let k = i; k < j; k++) {
      num = num + arr[k];
    }
    console.log(num);
}
num = ""
}

// Print fallowing conscative number CanvasPattern1
// 1
// 12
// 123
// 1234
// 2
// 23
// 234
// 3
// 34
// 4

let arr = [1, 2, 3, 4, 5];

for (let i = 0; i <= arr.length; i++) {
  let num = "";

  for (let j = i; j < arr.length; j++) {
    for (let k = i; k < j; k++) {
      num = num + arr[k];
    }
    console.log(num);
    num = ""; 
  }
}

// print
//     *
//    **
//   ***
//  ****
// *****

// here we need two inner for loop , 
// one is too print space and another is too print star

let n = 5;
for(let i = 1; i <=n;i++){
    let str="";

    // to print space
    for(let j=1;j<=n-i;j++){
        str = str+ " ";
    }
    // to print star
    for(let j=1;j<=i;j++){
        str = str+ "*";
    }
    console.log(str);
}
// print
// 12345
// 1234
// 123
// 12
// 1


let n = 5;
for(let i = 1; i <=n;i++){
    let str="";

    for(let j=1;j<=n+1-i;j++){  
//here n+1-i is added beacuse if we add n-i we get till only 1,2,3,4 i,e 5 will missed from print
        str = str+ j;
    }
    console.log(str);
}
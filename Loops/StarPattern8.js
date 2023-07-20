// print
// 1
// 2 3
// 4 5 6
// 7 8 9 10
// 11 12 13 14 15

let number = 1;
for(let i = 1; i <=5;i++){
    str= ""
    for(let j =1;j<=i;j++){
        str = str+number+" "
        number = number+1
    }
    console.log(str)

}
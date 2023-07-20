// print
// *****
// *   *
// *   *
// *   *
// *****
let m=5;
let n=5
for(let i=1;i<=n;i++) {
    let str= "";
    for(let j=1;j<=m;j++){
        if(i=== 1 || j===1 || j=== m ||i ===n){
            str = str+"*"
        }else {
            str = str+ " "
        }
    }
    console.log(str);
}
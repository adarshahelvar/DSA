// print
// 1
// 0 1
// 1 0 1
// 0 1 0 1
// 1 0 1 0 1

for (let i = 1; i <= 5; i++) {
  let str = "";
  for (let j = 1; j <= i; j++) {
    if ((i + j) % 2 == 0) {
      str = str + 1 + " ";
    } else {
      str = str + 0 + " ";
    }
  }
  console.log(str);
}


// Explaination
// Here we considerd it as a metrix. The first element is (1,1) so 1+1 =2
// For next line starts with 0 1 which means (2,1) and (2,2) so 2+1 =3 which is not devisible 2 it will give reminder
// So now i consider that for where ever 1 printed the sum will be devsible by 2 and for 0 we always get reminde

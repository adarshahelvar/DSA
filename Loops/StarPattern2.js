// Print this pattern
// ****
// ***
// **
// *

for (let i = 1; i <= 5; i++) {
  let str = "";
  for (j = 1; j <= 5 - i; j++) {
    str = str + "*";
  }
  console.log(str);
}



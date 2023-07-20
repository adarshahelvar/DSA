// print
// *             *
// * *         * *
// * * *     * * *
// * * * * * * * *
// * * * * * * * *
// * * *     * * * 
// * *         * *
// *             *

// upper Half
n=5;
for(let i=1;i<=n;i++){
  let str = ""
  // 1st part star
  for(let j=1;j<=i;j++){
    str = str + "*" + " "
  }
  // For spaces
  for(let m=1;m<=(2*(n-i));m++){
    str = str + " " + " "
  }
  // For 2ns part star
  for(let z=1;z<=i;z++){
    str = str + "*" + " "
  }
  console.log(str)
}
// for lower half
for(let i=1;i<=n;i++){
  let str = "";
  // 1st part of star
  for(let j=1;j<=n-i+1;j++){
    str = str + "*" + " "
  }
  // spaces between
  for(let m=1;m<=(2*(i-1));m++){
    str = str + " " + " "
  }
  // 2n half of star
  for(let z=1;z<=(n-i+1);z++){
    str = str + "*" + " "
  }

  console.log(str)
}
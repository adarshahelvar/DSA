// Write a program to return the reverse of a number
// Input :- n=123
// output :- 321

let givenNumber = 153;
let temp = givenNumber;
let revNuber = 0;

while (temp > 0) {
  let modulo = temp % 10;
  revNuber = revNuber * 10 + modulo;
  temp = Math.floor(temp / 10);
}
console.log(`Given Number is ${givenNumber} and reverse Number is ${revNuber}`);

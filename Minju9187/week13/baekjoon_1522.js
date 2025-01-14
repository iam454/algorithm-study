let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim();
// let input = fs.readFileSync("1.txt").toString().trim();

const len = input.length;
const aLength = [...input].filter((char) => char === "a").length;
input += input;

let aCount = 0;
let max = 0;

for (let i = 0; i < aLength; i++) {
  if (input[i] === "a") aCount++;
}

max = aCount;

for (let i = aLength; i < len + aLength; i++) {
  if (input[i - aLength] === "a") aCount--;
  if (input[i] === "a") aCount++;

  if (max < aCount) max = aCount;
}

console.log(aLength - max);

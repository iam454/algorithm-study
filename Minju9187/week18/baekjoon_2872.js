let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
// let input = fs.readFileSync("1.txt").toString().split("\n");

const N = Number(input.shift());
const arr = input.filter((v) => v.trim() !== "").map(Number);

let answer = 0;
let target = N;

for (let i = N - 1; i >= 0; i--) {
  if (arr[i] !== target) {
    answer++;
  } else {
    target--;
  }
}

console.log(answer);

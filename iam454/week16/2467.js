const fs = require("fs");

const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const N = Number(input[0]);
const values = input[1].split(" ").map(Number);

let l = 0;
let r = N - 1;
let min = Infinity;
let minL, minR;

while (l < r) {
  const sum = values[l] + values[r];

  if (Math.abs(sum) < Math.abs(min)) {
    min = sum;
    minL = values[l];
    minR = values[r];
  }

  if (sum < 0) {
    l += 1;
  } else {
    r -= 1;
  }
}

console.log(`${minL} ${minR}`);

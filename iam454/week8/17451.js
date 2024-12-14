const fs = require("fs");

const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const n = parseInt(input[0]);
const speeds = input[1].split(" ").map(Number);

let curSpeed = speeds[n - 1];

for (let i = n - 2; i >= 0; i--) {
  if (curSpeed < speeds[i]) {
    curSpeed = speeds[i];
  } else {
    if (curSpeed % speeds[i] !== 0) {
      curSpeed = speeds[i] * Math.ceil(curSpeed / speeds[i]);
    }
  }
}

console.log(curSpeed);

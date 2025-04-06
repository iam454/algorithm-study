const fs = require("fs");

const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, K] = input[0].split(" ").map(Number);
const nums = input[1].split(" ").map(Number);

let l = 0;
let r = Math.max(...nums);

while (l <= r) {
  const mid = Math.floor((l + r) / 2);

  let sum = 0;
  for (let num of nums) {
    if (num > mid) {
      sum += num - mid;
    }
  }

  if (sum > K) {
    l = mid + 1;
  } else {
    r = mid - 1;
  }
}

console.log(l);

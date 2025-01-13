const fs = require("fs");

const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input[0].split(" ").map(Number);
const nums = input[1].split(" ").map(Number);

let ans = 0;
let idx = 1;

while (idx < N) {
  if (Math.abs(nums[idx] - nums[idx - 1]) < M) {
    ans += 1;
    idx += 1;
  }
  idx += 1;
}

console.log(ans);

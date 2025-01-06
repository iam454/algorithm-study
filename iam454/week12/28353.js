const fs = require("fs");

const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, K] = input[0].split(" ").map(Number);
const weights = input[1].split(" ").map(Number);

weights.sort((a, b) => a - b);

let l = 0;
let r = N - 1;
let ans = 0;

while (l < r) {
  if (weights[l] + weights[r] <= K) {
    ans += 1;
    l += 1;
    r -= 1;
  } else {
    r -= 1;
  }
}

console.log(ans);

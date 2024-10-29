const fs = require("fs");

const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, X] = input[0].split(" ").map(Number);
const visitors = input[1].split(" ").map(Number);

if (Math.max(...visitors) === 0) {
  console.log("SAD");
  return;
}

let currentSum = 0;

for (let i = 0; i < X; i++) {
  currentSum += visitors[i];
}

let maxSum = currentSum;
let maxCount = 1;

for (let i = X; i < N; i++) {
  currentSum = currentSum - visitors[i - X] + visitors[i];
  if (currentSum > maxSum) {
    maxSum = currentSum;
    maxCount = 1;
  } else if (currentSum === maxSum) {
    maxCount++;
  }
}

console.log(`${maxSum}\n${maxCount}`);

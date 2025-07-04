const fs = require("fs");

const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const N = Number(input[0]);
const nums = input[1].split(" ").map(Number);

nums.sort((a, b) => a - b);

let ans = 0;

for (let i = 0; i < N; i++) {
  let target = nums[i];
  let left = 0;
  let right = N - 1;

  while (left < right) {
    if (left === i) {
      left += 1;
      continue;
    }
    if (right === i) {
      right -= 1;
      continue;
    }

    const sum = nums[left] + nums[right];

    if (sum === target) {
      ans += 1;
      break;
    } else if (sum < target) {
      left += 1;
    } else {
      right -= 1;
    }
  }
}

console.log(ans);

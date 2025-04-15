let fs = require("fs");
const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./1.txt")
  .toString()
  .trim()
  .split("\n");

const [n, s] = input.shift().split(" ").map(Number);
const m = Number(input.shift());
const arr = input.map((v) => +v);
let count = n - s;
let answer;

let left = 0;
let right = n - s;

while (left <= right) {
  const mid = Math.floor((left + right) / 2);

  if (countEatBread(mid, arr) < n - s) {
    left = mid + 1;
  } else {
    right = mid - 1;
  }
}

count -= countEatBread(left - 1, arr);

for (let i = 0; i < m; i++) {
  if (left % arr[i] === 0) {
    count--;
    if (count === 0) {
      answer = i + 1;
      break;
    }
  }
}

console.log(answer);

function countEatBread(second, arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    count += Math.floor(second / arr[i]) + 1;
  }
  return count;
}

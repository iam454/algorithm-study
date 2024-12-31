let fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let input = fs.readFileSync("1.txt").toString().split("\n");

const [N, M] = input.shift().split(" ").map(Number);

const trees = input[0].split(" ").map(Number);

let left = 1;
let right = Math.max(...trees);

let answer = 0;

while (left <= right) {
  const mid = (left + right) >> 1;
  let sum = 0;
  for (let i = 0; i < N; i++) {
    if (trees[i] - mid > 0) sum += trees[i] - mid;
  }
  if (sum >= M) {
    if (mid > answer) answer = mid;
    left = mid + 1;
  } else {
    right = mid - 1;
  }
}

console.log(answer);

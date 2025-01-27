let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
// let input = fs.readFileSync("1.txt").toString().split("\n");

const N = Number(input.shift());

const server = [];
let max = 0;
let total = 0;

for (let i = 0; i < N; i++) {
  const arr = input[i].split(" ").map(Number);
  server.push(...arr);
}

for (let i = 0; i < N * N; i++) {
  total += server[i];
  if (max < server[i]) max = server[i];
}

let left = 0;
let right = max;
let answer = 0;

while (left <= right) {
  const mid = Math.floor((left + right) / 2);
  let sum = 0;

  for (let i = 0; i < N * N; i++) {
    sum += Math.min(server[i], mid);
  }

  if (sum < total / 2) {
    left = mid + 1;
  } else {
    answer = mid;
    right = mid - 1;
  }
}

console.log(answer);

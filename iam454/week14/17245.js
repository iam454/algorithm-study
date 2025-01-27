const fs = require("fs");

const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const N = Number(input.shift());
const computers = [];

input.forEach((line) => {
  computers.push(...line.split(" ").map(Number));
});

const total = computers.reduce((acc, cur) => acc + cur, 0);
const target = Math.ceil(total / 2);

let l = 0;
let r = Math.max(...computers);

let ans = 0;

while (l <= r) {
  const mid = Math.floor((l + r) / 2);
  let sum = 0;

  for (let i = 0; i < computers.length; i++) {
    sum += Math.min(mid, computers[i]);
  }

  if (sum >= target) {
    ans = mid;
    r = mid - 1;
  } else {
    l = mid + 1;
  }
}

console.log(ans);

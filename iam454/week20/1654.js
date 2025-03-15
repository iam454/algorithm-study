const fs = require("fs");

const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const [K, N] = input.shift().split(" ").map(Number);
const lines = input.map(Number);

let l = 0;
let r = Math.max(...lines);

while (l <= r) {
  const mid = Math.floor((l + r) / 2);
  let cnt = 0;

  for (let line of lines) {
    cnt += Math.floor(line / mid);
  }

  if (cnt >= N) {
    l = mid + 1;
  } else {
    r = mid - 1;
  }
}

console.log(r);

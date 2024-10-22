const fs = require("fs");

const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const [n, k] = input[0].split(" ").map(Number);
const quacks = input[1].split(" ").map(Number);
let ans = 0;
let lastClapTime = -1;

for (let i = 0; i < n; i++) {
  let quack = quacks[i];

  if (quack > lastClapTime) {
    ans += 1;
    lastClapTime = quack + k;
  }
}

console.log(ans);

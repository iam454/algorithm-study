const fs = require("fs");

const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const N = Number(input[0]);
const snows = input[1].split(" ").map(Number);

snows.sort((a, b) => b - a);

const total = snows.reduce((acc, cur) => acc + cur, 0);
const time = Math.max(Math.ceil(total / 2), snows[0]);

if (time > 1440) {
  console.log(-1);
} else {
  console.log(time);
}

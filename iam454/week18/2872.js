const fs = require("fs");

const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const N = Number(input.shift());
const books = input.map(Number);

let ans = 0;
let cur = 1;

for (let i = 0; i < N; i++) {
  if (books[i] > cur) {
    if (books[i] === cur + 1) {
      cur += 1;
      continue;
    }
    ans += books[i] - cur;
    cur = books[i];
  }
}

console.log(ans);

const fs = require("fs");

const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim();

const [X, Y] = input.split(" ").map(Number);

const diff = Y - X;

if (diff === 0) {
  console.log(0);
  return;
}

let n = 1;

while (n * n <= diff) {
  n++;
}

n -= 1; // n++을 한번 더 해줬기 때문에 1을 빼준다.

let remain = diff - n * n;
let answer = 2 * n - 1;

while (remain > 0) {
  answer += 1;
  remain -= Math.min(n, remain);
}

console.log(answer);

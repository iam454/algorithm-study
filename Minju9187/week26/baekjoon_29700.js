let fs = require("fs");
const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./1.txt")
  .toString()
  .trim()
  .split("\n");

const [N, M, K] = input.shift().split(" ").map(Number);
const arr = input.map((v) => v.split("").map(Number));
let answer = 0;

for (let i = 0; i < N; i++) {
  let cnt = 0;
  for (let j = 0; j < M; j++) {
    if (arr[i][j] === 1) {
      cnt = 0;
    } else {
      cnt++;
    }
    if (cnt >= K) {
      answer++;
    }
  }
}

console.log(answer);

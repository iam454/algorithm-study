const fs = require("fs");

const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, M, K] = input.shift().split(" ").map(Number);
const rains = input.map((item) => item.split(" ").map(Number));

let flag = false;
let answer = [0, 1];
let cnt = 0;

for (let i = 0; i < M; i++) {
  const [t, r] = rains[i];
  cnt += r;
  if (cnt > K) {
    flag = true;
    answer[0] = i + 1;
    break;
  }
}

if (flag === false) {
  console.log(-1);
} else {
  console.log(answer.join(" "));
}

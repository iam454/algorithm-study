const fs = require("fs");

const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input[0].split(" ").map(Number);
const cakes = input[1].split(" ").map(Number);

// 오름차순으로 정렬하는데, 10의 배수가 앞에 오도록 정렬
cakes.sort((a, b) => {
  if (a % 10 === 0 && b % 10 === 0) {
    return a - b;
  } else if (a % 10 === 0) {
    return -1;
  } else if (b % 10 === 0) {
    return 1;
  } else {
    return a - b;
  }
});

let cnt = 0;
let ans = 0;

for (let i = 0; i < N; i++) {
  while (cakes[i] > 10 && cnt < M) {
    ans += 1;
    cakes[i] -= 10;
    cnt += 1;
  }
  if (cakes[i] === 10) {
    ans += 1;
  }
}

console.log(ans);

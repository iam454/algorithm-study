const fs = require("fs");

const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input[0].split(" ").map(Number);
const lessons = input[1].split(" ").map(Number);

let l = Math.max(...lessons);
let r = lessons.reduce((acc, cur) => acc + cur, 0);
let ans = 0;

while (l <= r) {
  const mid = Math.floor((l + r) / 2);
  let cnt = 1;
  let sum = 0;

  for (let i = 0; i < N; i++) {
    if (sum + lessons[i] > mid) {
      cnt += 1;
      sum = lessons[i];
    } else {
      sum += lessons[i];
    }
  }

  if (cnt > M) {
    l = mid + 1;
  } else {
    ans = mid;
    r = mid - 1;
  }
}

console.log(ans);

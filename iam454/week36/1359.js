const fs = require("fs");

const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim();

const [N, M, K] = input.split(" ").map(Number);

function factorial(n) {
  let res = 1;
  for (let i = 2; i <= n; i++) {
    res *= i;
  }
  return res;
}

function combination(n, r) {
  if (r > n || r < 0 || n < 0) {
    return 0;
  }
  return factorial(n) / (factorial(r) * factorial(n - r));
}

const total = combination(N, M);
let win = 0;

for (let i = K; i <= M; i++) {
  win += combination(M, i) * combination(N - M, M - i);
}

const ans = win / total;
console.log(ans);

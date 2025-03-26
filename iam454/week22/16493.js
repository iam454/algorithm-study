const fs = require("fs");

const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input.shift().split(" ").map(Number);
const books = input.map((item) => item.split(" ").map(Number));

const dp = new Array(N + 1).fill(0);

books.forEach((book) => {
  const [days, pages] = book;

  for (let i = N; i >= days; i--) {
    dp[i] = Math.max(dp[i], dp[i - days] + pages);
  }
});

console.log(dp[N]);

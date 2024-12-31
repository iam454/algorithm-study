let fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().trim();
let input = fs.readFileSync("1.txt").toString().trim();

const [N, K] = input.split(" ").map(Number);

function bfs(start, target) {
  const queue = [[start, 0]];
  const visited = new Array(100001).fill(false);
  visited[start] = true;

  while (queue.length) {
    const [current, time] = queue.shift();

    if (current === target) {
      return time;
    }

    for (const idx of [current - 1, current + 1, current * 2]) {
      if (idx >= 0 && idx <= 100000 && !visited[idx]) {
        visited[idx] = true;
        queue.push([idx, time + 1]);
      }
    }
  }
}

console.log(bfs(N, K));

function solution(start, target) {
  const dp = new Array(1000000).fill(Infinity);

  for (let i = 0; i < start; i++) {
    dp[i] = start - i;
  }

  dp[start] = 0;

  for (let i = start + 1; i <= target; i++) {
    if (i % 2 === 0) {
      dp[i] = Math.min(dp[i >> 1], dp[i - 1]) + 1;
    } else {
      dp[i] = Math.min(dp[i - 1] + 1, dp[(i - 1) >> 1] + 2);
    }
  }

  console.log(dp[target]);
}
solution(N, K);

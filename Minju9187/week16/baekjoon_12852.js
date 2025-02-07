let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim();
// let input = fs.readFileSync("1.txt").toString().trim();

const N = Number(input);

const dp = new Array(N + 1).fill(Infinity);
dp[1] = 0;

const from = new Array(N + 1).fill(-1);

for (let i = 2; i <= N; i++) {
  if (dp[i - 1] + 1 < dp[i]) {
    dp[i] = dp[i - 1] + 1;
    from[i] = i - 1;
  }

  if (i % 2 === 0 && dp[i / 2] + 1 < dp[i]) {
    dp[i] = dp[i / 2] + 1;
    from[i] = i / 2;
  }

  if (i % 3 === 0 && dp[i / 3] + 1 < dp[i]) {
    dp[i] = dp[i / 3] + 1;
    from[i] = i / 3;
  }
}

let path = [];
let current = N;

while (current !== 1) {
  path.push(current);
  current = from[current];
}

path.push(1);

console.log(dp[N] + "\n" + path.join(" "));

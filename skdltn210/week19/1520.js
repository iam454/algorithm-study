const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let n, m;
let arr = [];

readline
  .on("line", (line) => {
    if (!n) {
      [n, m] = line.split(" ").map(Number);
    } else {
      arr.push(line.split(" ").map(Number));
      if (arr.length === n) readline.close();
    }
  })
  .on("close", () => {
    solution();
    process.exit();
  });

const solution = () => {
  let dx = [0, 0, 1, -1];
  let dy = [1, -1, 0, 0];
  let dp = Array.from(Array(n), () => Array(m).fill(-1));

  const dfs = (y, x) => {
    if (y === n - 1 && x === m - 1) return 1;
    if (dp[y][x] !== -1) return dp[y][x];
    dp[y][x] = 0;
    for (let i = 0; i < 4; i++) {
      let ny = y + dy[i];
      let nx = x + dx[i];
      if (ny >= 0 && nx >= 0 && ny < n && nx < m) {
        if (arr[y][x] > arr[ny][nx]) {
          dp[y][x] += dfs(ny, nx);
        }
      }
    }
    return dp[y][x];
  };

  console.log(dfs(0, 0));
};

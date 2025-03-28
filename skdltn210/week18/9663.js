const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let n;

readline
  .on("line", (line) => {
    n = parseInt(line);
    readline.close();
  })
  .on("close", () => {
    solution();
    process.exit();
  });

const solution = () => {
  let ans = 0;
  let visited = Array(n).fill([]);
  for (let i = 0; i < n; i++) {
    visited[i] = Array(n).fill(false);
  }

  const isAvailable = (y, x) => {
    for (let i = 0; i < n; i++) {
      if (visited[y][i] || visited[i][x]) return false;
    }

    for (let i = y - 1, j = x - 1; i >= 0 && j >= 0; i--, j--) {
      if (visited[i][j]) return false;
    }

    for (let i = y - 1, j = x + 1; i >= 0 && j < n; i--, j++) {
      if (visited[i][j]) return false;
    }

    for (let i = y + 1, j = x - 1; i < n && j >= 0; i++, j--) {
      if (visited[i][j]) return false;
    }

    for (let i = y + 1, j = x + 1; i < n && j < n; i++, j++) {
      if (visited[i][j]) return false;
    }

    return true;
  };

  const dfs = (y, cnt) => {
    if (cnt === n) {
      ans++;
      return;
    }

    if (y >= n) return;

    for (let x = 0; x < n; x++) {
      if (isAvailable(y, x)) {
        visited[y][x] = true;
        dfs(y + 1, cnt + 1);
        visited[y][x] = false;
      }
    }
  };

  dfs(0, 0);
  console.log(ans);
};

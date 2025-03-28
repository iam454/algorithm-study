const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let n, m;
let edges = [];
let graph = [];

readline
  .on("line", (line) => {
    if (!n) {
      [n, m] = line.split(" ").map(Number);
      graph = Array.from({ length: n + 1 }, () => []);
    } else {
      const [u, v] = line.split(" ").map(Number);
      graph[u].push(v);
      graph[v].push(u);
      if (edges.length === m - 1) {
        readline.close();
      }
      edges.push([u, v]);
    }
  })
  .on("close", () => {
    solution();
    process.exit();
  });

function solution() {
  let visited = new Array(n + 1).fill(false);
  let ans = 0;

  function dfs(x) {
    visited[x] = true;
    for (let i = 0; i < graph[x].length; i++) {
      let y = graph[x][i];
      if (!visited[y]) {
        dfs(y);
      }
    }
  }
  for (let i = 1; i <= n; i++) {
    if (!visited[i]) {
      dfs(i);
      ans++;
    }
  }
  console.log(ans);
}

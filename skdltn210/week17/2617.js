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
      if (arr.length === m) {
        readline.close();
      }
    }
  })
  .on("close", () => {
    solution();
    process.exit();
  });

const solution = () => {
  let lightGraph = {};
  let heavyGraph = {};

  for (let i = 1; i <= n; i++) {
    lightGraph[i] = [];
    heavyGraph[i] = [];
  }
  for (let i = 0; i < m; i++) {
    const [a, b] = arr[i];
    lightGraph[a].push(b);
    heavyGraph[b].push(a);
  }

  const mid = Math.ceil(n / 2);
  let ans = [];

  const dfs = (x, graph, visited) => {
    let count = 1;
    visited[x] = true;

    for (let next of graph[x]) {
      if (!visited[next]) {
        count += dfs(next, graph, visited);
      }
    }
    return count;
  };

  for (let i = 1; i <= n; i++) {
    let visited = Array(n + 1).fill(false);
    if (dfs(i, lightGraph, visited) > mid && !ans.includes(i)) {
      ans.push(i);
    }

    visited = Array(n + 1).fill(false);
    if (dfs(i, heavyGraph, visited) > mid && !ans.includes(i)) {
      ans.push(i);
    }
  }

  console.log(ans.length);
};

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let n, m;
let arr = [];

readline
  .on("line", (line) => {
    if (!n) {
      n = parseInt(line);
    } else if (!m) {
      m = parseInt(line);
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
  let graph = {};
  for (let i = 0; i < m; i++) {
    let [a, b] = arr[i];
    if (!graph[a]) {
      graph[a] = [];
    }
    if (!graph[b]) {
      graph[b] = [];
    }
    graph[a].push(b);
    graph[b].push(a);
  }
  let visited = Array(n + 1).fill(false);

  const bfs = (x) => {
    visited[x] = true;
    let queue = [x];
    let cnt = 0;
    let depth = 0;
    while (queue.length > 0 && depth < 2) {
      let len = queue.length;
      depth++;
      for (let i = 0; i < len; i++) {
        let node = queue.shift();
        if (graph[node]) {
          for (let i = 0; i < graph[node].length; i++) {
            let next = graph[node][i];
            if (!visited[next]) {
              visited[next] = true;
              cnt++;
              queue.push(next);
            }
          }
        }
      }
    }
    return cnt;
  };

  console.log(bfs(1));
};

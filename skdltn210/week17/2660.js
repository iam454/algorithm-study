const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let n;
let arr = [];

readline
  .on("line", (line) => {
    if (!n) {
      n = parseInt(line);
    } else {
      if (line === "-1 -1") {
        readline.close();
      } else {
        arr.push(line.split(" ").map(Number));
      }
    }
  })
  .on("close", () => {
    solution();
    process.exit();
  });

const solution = () => {
  let graph = {};
  for (let i = 0; i < arr.length; i++) {
    let [a, b] = arr[i];
    if (!graph[a]) graph[a] = [];
    if (!graph[b]) graph[b] = [];
    graph[a].push(b);
    graph[b].push(a);
  }

  let ans = [];

  const bfs = (x) => {
    let visited = Array(n + 1).fill(false);
    let queue = [x];
    visited[x] = true;
    let depth = 0;
    while (queue.length > 0) {
      depth++;
      let len = queue.length;
      for (let i = 0; i < len; i++) {
        let cur = queue.shift();
        for (let next of graph[cur]) {
          if (!visited[next]) {
            visited[next] = true;
            queue.push(next);
          }
        }
      }
    }
    ans.push([x, depth - 1]);
  };
  for (let i = 1; i <= n; i++) {
    bfs(i);
  }
  ans.sort((a, b) => {
    if (a[1] === b[1]) return a[0] - b[0];
    return a[1] - b[1];
  });
  let pts = ans[0][1];
  let cnt = 0;
  for (let i = 0; i < ans.length; i++) {
    if (ans[i][1] === pts) cnt++;
  }
  console.log(pts, cnt);
  let candidates = [];
  for (let i = 0; i < cnt; i++) {
    candidates.push(ans[i][0]);
  }
  console.log(candidates.join(" "));
};

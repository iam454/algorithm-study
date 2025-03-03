const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let n, r, q;
let tree;
let cnt = 0;
let lineCnt = 0;
let subTree;

const dfs = (node, parent) => {
  subTree[node] = 1;
  for (let next of tree[node]) {
    if (next !== parent) {
      dfs(next, node);
      subTree[node] += subTree[next];
    }
  }
};

readline
  .on("line", (line) => {
    if (!n) {
      [n, r, q] = line.split(" ").map(Number);
      tree = Array(n + 1)
        .fill()
        .map(() => []);
      subTree = Array(n + 1).fill(0);
    } else if (lineCnt < n - 1) {
      let [u, v] = line.split(" ").map(Number);
      tree[u].push(v);
      tree[v].push(u);
      lineCnt++;
      if (lineCnt === n - 1) {
        dfs(r, -1);
      }
    } else {
      let query = Number(line);
      console.log(subTree[query]);
      cnt++;
      if (cnt === q) {
        readline.close();
      }
    }
  })
  .on("close", () => {
    process.exit();
  });

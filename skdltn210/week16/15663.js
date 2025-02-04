const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let n, m;
let arr = [];
let ans = [];
let visited;

readline
  .on("line", (line) => {
    if (!n) {
      [n, m] = line.split(" ").map(Number);
    } else {
      arr = line.split(" ").map(Number);
      visited = Array(n).fill(false);
      readline.close();
    }
  })
  .on("close", () => {
    solution();
    process.exit();
  });

const solution = () => {
  arr.sort((a, b) => a - b);
  dfs(0);
};

const dfs = (depth) => {
  if (depth === m) {
    console.log(ans.slice(0, m).join(" "));
    return;
  }

  let prev = -1; // 이전에 선택한 수
  for (let i = 0; i < n; i++) {
    if (!visited[i] && prev !== arr[i]) {
      // 이전에 선택한 수와 다른 경우
      visited[i] = true;
      ans[depth] = arr[i];
      prev = arr[i];
      dfs(depth + 1);
      visited[i] = false;
    }
  }
};

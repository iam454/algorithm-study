const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let n, m;

readline
  .on("line", (line) => {
    [n, m] = line.split(" ").map(Number);
    readline.close();
  })
  .on("close", () => {
    solution();
    process.exit();
  });

const solution = () => {
  let visited = Array(n + 1).fill(false);
  let arr = [];

  const dfs = (x) => {
    if (arr.length === m) {
      console.log(arr.join(" "));
      return;
    }
    for (let i = x; i <= n; i++) {
      if (!visited[i]) {
        visited[i] = true;
        arr.push(i);
        dfs(i);
        arr.pop();
        visited[i] = false;
      }
    }
  };

  dfs(1);
};

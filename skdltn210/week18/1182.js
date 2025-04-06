const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let n, s;
let arr = [];

readline
  .on("line", (line) => {
    if (!n) {
      [n, s] = line.split(" ").map(Number);
    } else {
      arr = line.split(" ").map(Number);
      readline.close();
    }
  })
  .on("close", () => {
    solution();
    process.exit();
  });

const solution = () => {
  let sum = 0;
  let cnt = 0;
  let visited = Array(n).fill(false);

  const dfs = (x) => {
    for (let i = x; i < n; i++) {
      if (visited[i]) continue;
      visited[i] = true;
      sum += arr[i];
      if (sum === s) cnt++;
      dfs(i + 1);
      visited[i] = false;
      sum -= arr[i];
    }
  };

  dfs(0);

  console.log(cnt);
};

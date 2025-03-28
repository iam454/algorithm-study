const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let k;
let arr = [];

readline
  .on("line", (line) => {
    [k, ...arr] = line.split(" ").map(Number);
    solution(k, arr);
    console.log("");
    if (k === 0) {
      readline.close();
    }
    k = -1;
    arr = [];
  })
  .on("close", () => {
    process.exit();
  });

const solution = (k, arr) => {
  let visited = new Array(k).fill(false);
  let num = [];

  const dfs = (x) => {
    if (num.length === 6) {
      console.log(num.join(" "));
      return;
    }

    for (let i = x; i < k; i++) {
      if (visited[i]) continue;
      visited[i] = true;
      num.push(arr[i]);
      dfs(i + 1);
      visited[i] = false;
      num.pop();
    }
  };

  dfs(0);
};

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let n, m;
let result = [];

readline
  .on("line", (line) => {
    [n, m] = line.split(" ").map(Number);
    readline.close();
  })
  .on("close", () => {
    solution();
    console.log(result.join("\n"));
    process.exit();
  });

const solution = () => {
  let arr = [];

  const dfs = (x) => {
    if (arr.length === m) {
      result.push(arr.join(" "));
      return;
    }
    for (let i = x; i <= n; i++) {
      arr.push(i);
      dfs(i);
      arr.pop();
    }
  };

  dfs(1);
};

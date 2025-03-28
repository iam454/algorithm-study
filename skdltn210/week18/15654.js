const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let n, m;
let num = [];
let result = [];

readline
  .on("line", (line) => {
    if (!n) {
      [n, m] = line.split(" ").map(Number);
    } else {
      num = line.split(" ").map(Number);
      readline.close();
    }
  })
  .on("close", () => {
    solution();
    console.log(result.join("\n"));
    process.exit();
  });

const solution = () => {
  let arr = [];
  let visited = Array(num.length).fill(false);
  num.sort((a, b) => a - b);

  const dfs = () => {
    if (arr.length === m) {
      result.push(arr.join(" "));
      return;
    }
    for (let i = 0; i < num.length; i++) {
      if (visited[i]) continue;
      arr.push(num[i]);
      visited[i] = true;
      dfs();
      arr.pop();
      visited[i] = false;
    }
  };

  dfs();
};

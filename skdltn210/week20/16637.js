const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let n;
let arr = [];

readline
  .on("line", (line) => {
    if (!n) {
      n = Number(line);
    } else {
      arr = line.split("");
      readline.close();
    }
  })
  .on("close", () => {
    solution();
    process.exit();
  });

const solution = () => {
  let max = -Infinity;

  const calc = (a, b, op) => {
    if (op === "+") return a + b;
    if (op === "-") return a - b;
    if (op === "*") return a * b;
  };

  const dfs = (idx, cur) => {
    if (idx > n - 1) {
      max = Math.max(max, cur);
      return;
    }

    let op = idx === 0 ? "+" : arr[idx - 1];

    if (idx + 2 < n) {
      let bracket = calc(Number(arr[idx]), Number(arr[idx + 2]), arr[idx + 1]);
      dfs(idx + 4, calc(cur, bracket, op));
    }
    dfs(idx + 2, calc(cur, Number(arr[idx]), op));
  };

  dfs(0, 0);
  console.log(max);
};

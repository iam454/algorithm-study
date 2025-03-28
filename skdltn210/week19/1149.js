const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let n;
let r = [];
let g = [];
let b = [];

readline
  .on("line", (line) => {
    if (!n) {
      n = parseInt(line);
    } else {
      [red, green, blue] = line.split(" ").map(Number);
      r.push(red);
      g.push(green);
      b.push(blue);
      if (b.length === n) {
        readline.close();
      }
    }
  })
  .on("close", () => {
    solution();
    process.exit();
  });

const solution = () => {
  let dp = [[r[0], g[0], b[0]]];
  for (let i = 1; i <= n - 1; i++) {
    dp.push([
      Math.min(dp[i - 1][1], dp[i - 1][2]) + r[i],
      Math.min(dp[i - 1][0], dp[i - 1][2]) + g[i],
      Math.min(dp[i - 1][0], dp[i - 1][1]) + b[i],
    ]);
  }
  console.log(Math.min(dp[n - 1][0], dp[n - 1][1], dp[n - 1][2]));
};

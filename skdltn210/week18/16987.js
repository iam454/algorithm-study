const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let n;
let eggs = [];

readline
  .on("line", (line) => {
    if (!n) {
      n = parseInt(line);
    } else {
      eggs.push(line.split(" ").map(Number));
      if (eggs.length === n) readline.close();
    }
  })
  .on("close", () => {
    solution();
    process.exit();
  });

const solution = () => {
  let max = 0;

  const dfs = (x) => {
    if (x === n) {
      let cnt = 0;
      for (let i = 0; i < n; i++) {
        if (eggs[i][0] <= 0) cnt++;
      }
      max = Math.max(max, cnt);
      return;
    }
    if (eggs[x][0] <= 0) {
      dfs(x + 1);
      return;
    }
    let allBroken = true;
    for (let i = 0; i < n; i++) {
      if (i !== x && eggs[i][0] > 0) {
        allBroken = false;
        break;
      }
    }
    if (allBroken) {
      dfs(x + 1);
      return;
    }
    for (let i = 0; i < n; i++) {
      if (x === i || eggs[i][0] <= 0) continue;
      eggs[x][0] -= eggs[i][1];
      eggs[i][0] -= eggs[x][1];
      dfs(x + 1);
      eggs[x][0] += eggs[i][1];
      eggs[i][0] += eggs[x][1];
    }
  };

  dfs(0);
  console.log(max);
};

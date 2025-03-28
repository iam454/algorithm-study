const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let n, m;
let arr = [];

readline
  .on("line", (line) => {
    if (!n) {
      [n, m] = line.split(" ").map(Number);
    } else {
      arr.push(line.split(" ").map(Number));
      if (arr.length === n) {
        readline.close();
      }
    }
  })
  .on("close", () => {
    solution();
    process.exit();
  });

const solution = () => {
  let min = Infinity;
  let cnt = 0;

  let home = [];
  let chicken = [];

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (arr[i][j] === 1) home.push([i, j]);
      if (arr[i][j] === 2) chicken.push([i, j]);
    }
  }

  let visited = Array(chicken.length).fill(false);

  const calculateChickenDistance = () => {
    let num = 0;
    for (let i = 0; i < home.length; i++) {
      let minDistance = Infinity;
      for (let j = 0; j < chicken.length; j++) {
        if (!visited[j]) continue;
        let distance =
          Math.abs(home[i][0] - chicken[j][0]) +
          Math.abs(home[i][1] - chicken[j][1]);
        minDistance = Math.min(minDistance, distance);
      }
      num += minDistance;
    }
    return num;
  };

  const dfs = (start, cnt) => {
    if (cnt === m) {
      let sum = calculateChickenDistance();
      min = Math.min(min, sum);
      return;
    }
    for (let i = start; i < chicken.length; i++) {
      if (!visited[i]) {
        visited[i] = true;
        dfs(i + 1, cnt + 1);
        visited[i] = false;
      }
    }
  };
  dfs(0, 0);
  console.log(min);
};

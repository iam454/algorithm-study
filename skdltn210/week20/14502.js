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
  let wallCnt = 0;
  let max = 0;

  const bfs = (arr) => {
    let dx = [0, 0, 1, -1];
    let dy = [1, -1, 0, 0];
    let queue = [];
    let cnt = 0;
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
        if (arr[i][j] === 2) queue.push([i, j]);
      }
    }
    while (queue.length > 0) {
      let [x, y] = queue.shift();
      for (let j = 0; j < 4; j++) {
        let nx = x + dx[j];
        let ny = y + dy[j];
        if (nx >= 0 && nx < n && ny >= 0 && ny < m) {
          if (arr[nx][ny] === 0) {
            arr[nx][ny] = 2;
            queue.push([nx, ny]);
          }
        }
      }
    }
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
        if (arr[i][j] === 0) cnt++;
      }
    }
    return cnt;
  };

  const dfs = (y, x) => {
    if (wallCnt === 3) {
      let copy = arr.map((row) => [...row]);
      let cnt = bfs(copy);
      max = Math.max(max, cnt);
      return;
    }
    for (let i = y; i < n; i++) {
      for (let j = i === y ? x : 0; j < m; j++) {
        if (arr[i][j] === 0) {
          arr[i][j] = 1;
          wallCnt++;
          dfs(i, j + 1);
          arr[i][j] = 0;
          wallCnt--;
        }
      }
    }
  };
  dfs(0, 0);
  console.log(max);
};

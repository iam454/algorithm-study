const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let t;
let w, h;
let arr = [];
let testCase = 0;

readline
  .on("line", (line) => {
    if (!t) {
      t = parseInt(line);
    } else {
      if (testCase === t) readline.close();
      if (!w) {
        [w, h] = line.split(" ").map(Number);
      } else {
        arr.push(line.split(""));
        if (arr.length === h) {
          solution();
          arr = [];
          w = null;
          h = null;
          testCase++;
        }
      }
    }
  })
  .on("close", () => {
    process.exit();
  });

const solution = () => {
  const dy = [1, -1, 0, 0];
  const dx = [0, 0, 1, -1];
  let visited = Array.from({ length: h }, () => Array(w).fill(false));
  let fires = [];
  let startX, startY;

  for (let i = 0; i < h; i++) {
    for (let j = 0; j < w; j++) {
      if (arr[i][j] === "*") {
        fires.push([i, j]);
        visited[i][j] = true;
      } else if (arr[i][j] === "@") {
        startY = i;
        startX = j;
      } else if (arr[i][j] === "#") {
        visited[i][j] = true;
      }
    }
  }

  const bfs = (y, x) => {
    visited[y][x] = true;
    let cnt = 1;
    let queue = [[y, x]];
    let fireQueue = [...fires];

    while (queue.length > 0) {
      let newFires = [];
      for (let [fy, fx] of fireQueue) {
        for (let i = 0; i < 4; i++) {
          let nfy = fy + dy[i];
          let nfx = fx + dx[i];
          if (nfy >= 0 && nfy < h && nfx >= 0 && nfx < w) {
            if (!visited[nfy][nfx]) {
              visited[nfy][nfx] = true;
              newFires.push([nfy, nfx]);
            }
          }
        }
      }
      fireQueue = newFires;

      let len = queue.length;
      for (let i = 0; i < len; i++) {
        let [cy, cx] = queue.shift();

        if (cy === 0 || cy === h - 1 || cx === 0 || cx === w - 1) {
          return cnt;
        }

        for (let j = 0; j < 4; j++) {
          let ny = cy + dy[j];
          let nx = cx + dx[j];
          if (ny >= 0 && ny < h && nx >= 0 && nx < w) {
            if (!visited[ny][nx]) {
              visited[ny][nx] = true;
              queue.push([ny, nx]);
            }
          }
        }
      }
      cnt++;
    }
    return "IMPOSSIBLE";
  };

  console.log(bfs(startY, startX));
};

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let R, C;
let arr = [];

readline
  .on("line", (line) => {
    if (!R) {
      [R, C] = line.split(" ").map(Number);
    } else {
      arr.push(line.split(""));
      if (arr.length === R) {
        readline.close();
      }
    }
  })
  .on("close", () => {
    solution();
    process.exit();
  });

const solution = () => {
  const dy = [1, -1, 0, 0];
  const dx = [0, 0, 1, -1];
  let visited = Array.from({ length: R }, () => Array(C).fill(false));
  let fires = [];
  let startX, startY;

  for (let i = 0; i < R; i++) {
    for (let j = 0; j < C; j++) {
      if (arr[i][j] === "F") {
        fires.push([i, j]);
        visited[i][j] = true;
      } else if (arr[i][j] === "J") {
        startY = i;
        startX = j;
      } else if (arr[i][j] === "#") {
        visited[i][j] = true;
      }
    }
  }

  if (startY === 0 || startY === R - 1 || startX === 0 || startX === C - 1) {
    return console.log(1);
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
          if (nfy >= 0 && nfy < R && nfx >= 0 && nfx < C) {
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

        if (cy === 0 || cy === R - 1 || cx === 0 || cx === C - 1) {
          return cnt;
        }

        for (let j = 0; j < 4; j++) {
          let ny = cy + dy[j];
          let nx = cx + dx[j];
          if (ny >= 0 && ny < R && nx >= 0 && nx < C) {
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

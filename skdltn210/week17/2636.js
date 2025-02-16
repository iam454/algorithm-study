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
  const dx = [0, 0, 1, -1];
  const dy = [1, -1, 0, 0];

  let cnt = 0;

  const outerAir = () => {
    let visited = Array.from({ length: n }, () => Array(m).fill(false));
    let queue = [[0, 0]];
    visited[0][0] = true;
    while (queue.length > 0) {
      const [y, x] = queue.shift();
      for (let i = 0; i < 4; i++) {
        const nx = x + dx[i];
        const ny = y + dy[i];
        if (nx < 0 || ny < 0 || nx >= m || ny >= n) continue;
        if (visited[ny][nx]) continue;
        if (arr[ny][nx] === 1) continue;
        visited[ny][nx] = true;
        arr[ny][nx] = 2;
        queue.push([ny, nx]);
      }
    }
  };

  const hasOuterAir = (y, x) => {
    for (let i = 0; i < 4; i++) {
      if (arr[y + dy[i]][x + dx[i]] === 2) {
        return true;
      }
    }
    return false;
  };

  const meltCheese = () => {
    let cheese = [];
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
        if (arr[i][j] !== 1) continue;
        else {
          if (hasOuterAir(i, j)) {
            cheese.push([i, j]);
          }
        }
      }
    }
    return cheese;
  };

  let lastCheese = [];

  while (true) {
    outerAir();
    const cheese = meltCheese();
    if (cheese.length === 0) {
      console.log(cnt);
      console.log(lastCheese.length);
      return;
    }
    cnt++;
    lastCheese = [];
    for (const [y, x] of cheese) {
      arr[y][x] = 2;
      lastCheese.push([y, x]);
    }
  }
};

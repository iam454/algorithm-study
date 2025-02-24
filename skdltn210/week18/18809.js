const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let n, m, g, r;
let garden = [];
let landPositions = [];

readline
  .on("line", (line) => {
    if (!n) {
      [n, m, g, r] = line.split(" ").map(Number);
    } else {
      garden.push(line.split(" ").map(Number));
      if (garden.length === n) {
        readline.close();
      }
    }
  })
  .on("close", () => {
    solution();
    process.exit();
  });

const solution = () => {
  let dx = [0, 0, 1, -1];
  let dy = [1, -1, 0, 0];

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (garden[i][j] === 2) {
        landPositions.push([i, j]);
      }
    }
  }

  let maxFlowers = 0;

  const selectSpots = (index, green, red) => {
    if (green.length === g && red.length === r) {
      maxFlowers = Math.max(maxFlowers, bfs(green, red));
      return;
    }

    if (index === landPositions.length) return;

    let [y, x] = landPositions[index];

    selectSpots(index + 1, green, red);

    if (green.length < g) {
      selectSpots(index + 1, [...green, [y, x]], red);
    }

    if (red.length < r) {
      selectSpots(index + 1, green, [...red, [y, x]]);
    }
  };

  const bfs = (green, red) => {
    let queue = [];
    let visited = Array.from({ length: n }, () => Array(m).fill(null));
    let flowers = 0;

    green.forEach(([y, x]) => {
      queue.push([y, x, "G", 0]);
      visited[y][x] = ["G", 0];
    });
    red.forEach(([y, x]) => {
      queue.push([y, x, "R", 0]);
      visited[y][x] = ["R", 0];
    });

    while (queue.length) {
      let newQueue = [];

      for (let [y, x, color, time] of queue) {
        if (visited[y][x][0] === "F") continue;

        for (let i = 0; i < 4; i++) {
          let ny = y + dy[i];
          let nx = x + dx[i];

          if (ny < 0 || ny >= n || nx < 0 || nx >= m) continue;
          if (garden[ny][nx] === 0) continue;

          if (visited[ny][nx] === null) {
            visited[ny][nx] = [color, time + 1];
            newQueue.push([ny, nx, color, time + 1]);
          } else if (visited[ny][nx][0] !== "F") {
            let [prevColor, prevTime] = visited[ny][nx];
            if (prevColor !== color && prevTime === time + 1) {
              flowers++;
              visited[ny][nx] = ["F", time + 1];
            }
          }
        }
      }
      queue = newQueue;
    }
    return flowers;
  };

  selectSpots(0, [], []);
  console.log(maxFlowers);
};

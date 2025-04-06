const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let t;
let move = "";
let lineCnt = 0;

readline
  .on("line", (line) => {
    if (!t) {
      t = parseInt(line);
    } else {
      lineCnt++;
      move = line;
      solution(move);
      move = "";
      if (lineCnt === t) {
        readline.close();
      }
    }
  })
  .on("close", () => {
    process.exit();
  });

const solution = (move) => {
  let m = move.split("");
  let minX = 0;
  let minY = 0;
  let maxX = 0;
  let maxY = 0;
  let dx = [0, 1, 0, -1];
  let dy = [1, 0, -1, 0];
  let x = 0;
  let y = 0;
  let dir = 0;

  const moving = (m) => {
    if (m === "F") {
      x += dx[dir];
      y += dy[dir];
    } else if (m === "B") {
      x -= dx[dir];
      y -= dy[dir];
    } else if (m === "L") {
      dir = (dir + 3) % 4;
    } else if (m === "R") {
      dir = (dir + 1) % 4;
    }
    minX = Math.min(minX, x);
    minY = Math.min(minY, y);
    maxX = Math.max(maxX, x);
    maxY = Math.max(maxY, y);
  };

  for (let i = 0; i < m.length; i++) {
    moving(m[i], y, x);
  }
  console.log(Math.abs(maxX - minX) * Math.abs(maxY - minY));
};

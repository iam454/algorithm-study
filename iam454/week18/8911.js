const fs = require("fs");

const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const T = Number(input.shift());
const ans = [];

input.forEach((line) => {
  solve(line);
});

function solve(line) {
  // 북, 동, 남, 서
  const dx = [0, 1, 0, -1];
  const dy = [1, 0, -1, 0];

  let cDir = 0;
  let cx = 0;
  let cy = 0;

  let minX = 0;
  let minY = 0;
  let maxX = 0;
  let maxY = 0;

  for (let l of line) {
    if (l === "F") {
      cx += dx[cDir];
      cy += dy[cDir];
    } else if (l === "B") {
      cx -= dx[cDir];
      cy -= dy[cDir];
    } else if (l === "L") {
      cDir = (cDir + 3) % 4;
    } else if (l === "R") {
      cDir = (cDir + 1) % 4;
    }

    minX = Math.min(minX, cx);
    minY = Math.min(minY, cy);
    maxX = Math.max(maxX, cx);
    maxY = Math.max(maxY, cy);
  }

  ans.push((maxX - minX) * (maxY - minY));
}

console.log(ans.join("\n"));

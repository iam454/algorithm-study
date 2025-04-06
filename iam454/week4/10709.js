const fs = require("fs");

const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const [H, W] = input[0].split(" ").map(Number);
const sky = input.slice(1).map((v) => v.split(""));
const visited = Array.from({ length: H }, () => new Array(W).fill(false));

for (let i = 0; i < H; i++) {
  let cloud = -1;
  for (let j = 0; j < W; j++) {
    if (sky[i][j] === "c") {
      cloud = j;
    }
    if (cloud === -1) {
      visited[i][j] = -1;
    } else {
      visited[i][j] = j - cloud;
    }
  }
}

console.log(visited.map((v) => v.join(" ")).join("\n"));

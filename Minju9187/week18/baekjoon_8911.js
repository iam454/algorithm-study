let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
// let input = fs.readFileSync("1.txt").toString().trim().split("\n");

const T = Number(input.shift());

const arr = input.map((v) => v.replace("\r", ""));

const dir = [
  [0, 1],
  [-1, 0],
  [0, -1],
  [1, 0],
];

const answer = [];

for (let i = 0; i < T; i++) {
  answer.push(solution(arr[i]));
}

function solution(string) {
  const cur = [0, 0];
  let idx = 0;
  let maxX = 0;
  let minX = 0;
  let maxY = 0;
  let minY = 0;

  for (let i = 0; i < string.length; i++) {
    if (string[i] === "F") {
      cur[0] += dir[idx][0];
      cur[1] += dir[idx][1];
    } else if (string[i] === "B") {
      cur[0] -= dir[idx][0];
      cur[1] -= dir[idx][1];
    } else if (string[i] === "L") {
      idx = (idx + 1) % 4;
    } else {
      idx = (idx - 1 + 4) % 4;
    }

    if (string[i] === "F" || string[i] === "B") {
      maxX = Math.max(maxX, cur[0]);
      minX = Math.min(minX, cur[0]);
      maxY = Math.max(maxY, cur[1]);
      minY = Math.min(minY, cur[1]);
    }
  }

  return (maxX - minX) * (maxY - minY);
}

console.log(answer.join("\n"));

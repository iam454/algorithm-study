const fs = require("fs");

const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input.shift().split(" ").map(Number);
const board = input.map((line) => line.split(" ").map(Number));

const stores = [];

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (board[i][j] === 2) {
      stores.push([i, j]);
    }
  }
}

function getCombs(arr, m) {
  const result = [];

  function helper(start, path) {
    if (path.length === m) {
      result.push([...path]);
      return;
    }
    for (let i = start; i < arr.length; i++) {
      path.push(arr[i]);
      helper(i + 1, path);
      path.pop();
    }
  }
  helper(0, []);
  return result;
}

const storeCombs = getCombs(stores, M);

let minDistance = Infinity;

for (const comb of storeCombs) {
  let totalDistance = 0;

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (board[i][j] === 1) {
        let minDist = Infinity;
        for (const [x, y] of comb) {
          const dist = Math.abs(i - x) + Math.abs(j - y);
          minDist = Math.min(minDist, dist);
        }
        totalDistance += minDist;
      }
    }
  }

  minDistance = Math.min(minDistance, totalDistance);
}

console.log(minDistance);

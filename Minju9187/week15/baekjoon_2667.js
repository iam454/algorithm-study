let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
// let input = fs.readFileSync("1.txt").toString().split("\n");

const N = Number(input.shift());

const map = [];
const result = [];

const dir = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];

//지도 데이터 배열로 변환
for (let i = 0; i < N; i++) {
  map.push(input[i].split("").map(Number));
}

//방문체크 배열 생성
const visited = new Array(N);

for (let i = 0; i < N; i++) {
  visited[i] = new Array(N).fill(0);
}

//범위 체크 함수
function rangeCheck(row, col) {
  if (row >= 0 && row < N && col >= 0 && col < N) {
    return true;
  }
  return false;
}

// function DFS(row, col, count) {
//   if (!rangeCheck(row, col) || map[row][col] === 0 || visited[row][col] !== 0) {
//     return count;
//   }

//   visited[row][col] = 1;
//   count++;

//   for (let i = 0; i < 4; i++) {
//     const [dx, dy] = dir[i];
//     count = DFS(row + dx, col + dy, count);
//   }

//   return count;
// }

function BFS(row, col) {
  const queue = [[row, col]];
  let number = 0;
  while (queue.length > 0) {
    const [x, y] = queue.shift();
    if (visited[x][y] === 0) {
      visited[x][y] = 1;
      number++;
      for (let i = 0; i < 4; i++) {
        const [dx, dy] = dir[i];
        if (
          rangeCheck(x + dx, y + dy) &&
          visited[x + dx][y + dy] === 0 &&
          map[x + dx][y + dy] === 1
        ) {
          queue.push([x + dx, y + dy]);
        }
      }
    }
  }
  return number;
}

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (map[i][j] === 1 && visited[i][j] === 0) {
      //   result.push(DFS(i, j, 0));
      result.push(BFS(i, j));
    }
  }
}

result.sort((a, b) => a - b);

const answer = [result.length, ...result];

console.log(answer.join("\n"));

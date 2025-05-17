let fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./1.txt")
  .toString()
  .trim();

const MAX_SIZE = 1000;
const S = Number(input);
const visited = Array.from({ length: MAX_SIZE + 1 }, () =>
  Array(MAX_SIZE + 1).fill(false)
);

function bfs() {
  const queue = [];
  queue.push([1, 0, 0]);
  visited[1][0] = true;

  while (queue.length) {
    const [now, clipBoard, time] = queue.shift();
    if (now === S) return console.log(time);
    if (0 >= now || now > MAX_SIZE) continue;

    if (!visited[now][now]) {
      visited[now][now] = true;
      queue.push([now, now, time + 1]);
    }

    if (clipBoard && now + clipBoard <= MAX_SIZE) {
      if (!visited[now + clipBoard][clipBoard]) {
        visited[now + clipBoard][clipBoard] = true;
        queue.push([now + clipBoard, clipBoard, time + 1]);
      }
    }

    if (!visited[now - 1][clipBoard]) {
      visited[now - 1][clipBoard] = true;
      queue.push([now - 1, clipBoard, time + 1]);
    }
  }
}

bfs();

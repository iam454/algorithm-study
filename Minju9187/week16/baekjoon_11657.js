let fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let input = fs.readFileSync("1.txt").toString().split("\n");

let [N, M] = input.shift().split(" ").map(Number);

const distance = new Array(N + 1).fill(Infinity);

distance[1] = 0;

let cycle = false;
for (let i = 1; i <= N; i++) {
  for (let j = 0; j < M; j++) {
    const [start, end, time] = input[j].split(" ").map(Number);

    if (
      distance[start] !== Infinity &&
      distance[end] > distance[start] + time
    ) {
      distance[end] = distance[start] + time;
      if (i === N) cycle = true;
    }
  }
}

if (cycle) console.log(-1);
else {
  for (let i = 2; i <= N; i++) {
    console.log(distance[i] === Infinity ? -1 : distance[i]);
  }
}

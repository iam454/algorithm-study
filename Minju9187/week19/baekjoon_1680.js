let fs = require("fs");
const input = fs
  .readFileSync(fs.existsSync("/dev/stdin") ? "/dev/stdin" : "2.txt")
  .toString()
  .trim()
  .split("\n");

const T = Number(input.shift());
let index = 0;
const answer = [];

for (let i = 0; i < T; i++) {
  const [W, N] = input[index].split(" ").map(Number);
  index++;

  let curCapacity = W;
  let totalDistance = 0;
  let lastPosition = 0;

  for (let j = 0; j < N; j++) {
    const [pos, trash] = input[index].split(" ").map(Number);
    index++;

    totalDistance += pos - lastPosition;
    if (curCapacity > trash) {
      curCapacity -= trash;
    } else if (curCapacity === trash) {
      totalDistance += pos * 2;
      curCapacity = W;
    } else {
      totalDistance += pos * 2;
      curCapacity = W - trash;
    }
    lastPosition = pos;
  }
  if (curCapacity === W) {
    totalDistance -= 2 * lastPosition;
  }
  totalDistance += lastPosition;
  answer.push(totalDistance);
}

console.log(answer.join("\n"));

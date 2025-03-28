const fs = require("fs");

const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const [N, K, A, B] = input;

const plants = new Array(N).fill(K);

let ans = 1;

while (true) {
  let min = Math.min(...plants);
  let minIndex = plants.indexOf(min);

  if (minIndex === N - 1) {
    for (let i = minIndex; i > minIndex - A; i--) {
      plants[i] += B;
    }
  } else {
    for (let i = minIndex; i < minIndex + A; i++) {
      plants[i] += B;
    }
  }

  for (let i = 0; i < N; i++) {
    plants[i] -= 1;
  }

  if (plants.some((plant) => plant === 0)) {
    break;
  } else {
    ans += 1;
  }
}

console.log(ans);

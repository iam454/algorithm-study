let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
// let input = fs.readFileSync("2.txt").toString().split("\n");

const T = Number(input.shift());
let index = 0;
const result = [];
for (let cnt = 1; cnt <= T; cnt++) {
  const N = Number(input[index]);
  index++;

  for (let i = 0; i < N; i++) {
    const [x, y] = input[index].split(" ").map(Number);
    index++;
    result.push(`${i + 1} ${x + 1} ${y + 200000001}`);
  }
}

console.log(result.join("\n"));

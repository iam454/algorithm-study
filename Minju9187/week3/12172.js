let fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let input = fs.readFileSync("예제.txt").toString().split("\n");

const T = input.shift();

for (let i = 0; i < T; i++) {
  let [X, R, C] = input[i].split(" ").map(Number);
  const result = judgment(X, R, C);
  console.log(`Case #${i + 1}: ${result}`);
}

function judgment(X, R, C) {
  const max = Math.max(R, C);
  const min = Math.min(R, C);
  if ((R * C) % X !== 0) {
    return "RICHARD";
  }
  if (max < X) return "RICHARD";
  if (X === 3) {
    if (min === 1) return "RICHARD";
  } else if (X === 4) {
    if (min <= 2) return "RICHARD";
  }
  return "GABRIEL";
}

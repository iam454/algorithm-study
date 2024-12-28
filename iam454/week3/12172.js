const fs = require("fs");

const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

input.shift();

input.forEach((line, index) => {
  solution(line, index + 1);
});

function solution(line, index) {
  const [X, R, C] = line.split(" ").map(Number);

  if (X === 1) {
    console.log(`Case #${index}: GABRIEL`);
    return;
  }

  if (X === 2) {
    if ((R * C) % 2 === 0) {
      console.log(`Case #${index}: GABRIEL`);
    } else {
      console.log(`Case #${index}: RICHARD`);
    }
    return;
  }

  if (X === 3) {
    if ((R * C) % 3 === 0 && R >= 2 && C >= 2) {
      console.log(`Case #${index}: GABRIEL`);
    } else {
      console.log(`Case #${index}: RICHARD`);
    }
    return;
  }

  if (X === 4) {
    if ((R * C) % 4 === 0 && R >= 3 && C >= 3) {
      console.log(`Case #${index}: GABRIEL`);
    } else {
      console.log(`Case #${index}: RICHARD`);
    }
    return;
  }
}

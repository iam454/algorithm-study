let fs = require("fs");
const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./1.txt")
  .toString()
  .trim()
  .split("\n");

const [N, P] = input.shift().split(" ").map(Number);
let answer = 0;
const info = Array.from({ length: N + 1 }, () => []);

for (let i = 0; i < input.length; i++) {
  const [lineNum, fretNum] = input[i].split(" ").map(Number);
  if (
    info[lineNum].length === 0 ||
    info[lineNum][info[lineNum].length - 1] < fretNum
  ) {
    info[lineNum].push(fretNum);
    answer++;
  } else {
    const removedCount = removeFingers(info, lineNum, fretNum);
    answer += removedCount;
    if (info[lineNum][info[lineNum].length - 1] === fretNum) continue;
    info[lineNum].push(fretNum);
    answer++;
  }
}

console.log(answer);

return;

function removeFingers(info, lineNum, fretNum) {
  let count = 0;
  while (
    info[lineNum].length > 0 &&
    info[lineNum][info[lineNum].length - 1] > fretNum
  ) {
    info[lineNum].pop();
    count++;
  }
  return count;
}

let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
// let input = fs.readFileSync("1.txt").toString().trim().split("\n");

const [N, M] = input.shift().split(" ").map(Number);

const arr = input[0].split(" ").map(Number);

arr.sort((a, b) => {
  const aDivisible = a % 10 === 0;
  const bDivisible = b % 10 === 0;

  if (aDivisible && !bDivisible) return -1;
  if (!aDivisible && bDivisible) return 1;

  return a - b;
});

let count = M;
let answer = 0;

for (let i = 0; i < N; i++) {
  let cake10Count = 0;
  let cutCount = 0;
  let check = false;
  const cake = Math.floor(arr[i] / 10);
  if (arr[i] === 10) {
    answer++;
    continue;
  }
  if (arr[i] < 10) {
    continue;
  }

  if (arr[i] % 10 === 0) {
    check = true;
  }
  cake10Count += cake;
  cutCount += cake;

  if (check) {
    cutCount--;
  }

  if (count >= cutCount) {
    count -= cutCount;
    answer += cake10Count;
  } else {
    answer += count;
    break;
  }
}

console.log(answer);

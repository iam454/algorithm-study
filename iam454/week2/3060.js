const fs = require("fs");

// EACCES 에러로 경로 변경
const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

const N = Number(input.shift());

for (let i = 0; i < N * 2; i += 2) {
  const tc = input.slice(i, i + 2);
  solution(tc);
}

function solution(tc) {
  const N = tc[0];
  const pigs = tc[1].split(" ").map(Number);

  let days = 0;
  let required = pigs.reduce((acc, cur) => acc + cur, 0);

  while (N >= required) {
    required *= 4;
    days += 1;
  }

  console.log(days + 1);
}

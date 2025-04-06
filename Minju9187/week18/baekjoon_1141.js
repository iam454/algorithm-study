let fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let input = fs.readFileSync("1.txt").toString().trim().split("\n");

const N = Number(input.shift());

const dic = input.map((v) => v.replace("\r", ""));

dic.sort((a, b) => a.length - b.length);

let answer = N;

for (let i = 0; i < N; i++) {
  for (let j = i + 1; j < N; j++) {
    if (dic[j].startsWith(dic[i])) {
      answer--;
      break;
    }
  }
}

console.log(answer);

let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim();
// let input = fs.readFileSync("1.txt").toString().trim();

const [X, Y] = input.split(" ").map(Number);

let dif = Y - X;
let answer = 0;
//1, 1 + 2 + 1(4), 1 + 2 + 3 + 2 + 1(9), 1 + 2 + 3 + 4 + 3 + 2 + 1(16)

let idx = 0;
while (idx * idx < dif) {
  idx++;
}

idx = idx * idx === dif ? idx : idx - 1;
answer += 2 * idx - 1;
dif -= idx * idx;

while (dif > 0) {
  dif -= idx;
  answer++;
}

console.log(answer);

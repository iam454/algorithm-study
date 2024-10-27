let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

const num = input[0];
const arr = input[1].split(" ").map(Number);
let answer = 0;

let sum = arr.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);

arr.sort((a, b) => b - a);

while (arr.length > 0) {
  let value = arr[arr.length - 1];
  answer += current * (sum - current);
  arr.pop();
}

console.log(answer / 2);

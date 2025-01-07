let fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let input = fs.readFileSync("1.txt").toString().split("\n");

const N = Number(input.shift());
const arr = [];

for (let i = 0; i < N; i++) {
  const [start, end] = input[i].split(" ").map(Number);
  arr.push([start, end]);
}

arr.sort((a, b) => (a[1] === b[1] ? a[0] - b[0] : a[1] - b[1]));

let time = 0;
let result = 0;

for (let i = 0; i < arr.length; i++) {
  const [start, end] = arr[i];
  if (time <= start) {
    time = end;
    result++;
  }
}

console.log(result);

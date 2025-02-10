let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
// let input = fs.readFileSync("1.txt").toString().split("\n");

const N = Number(input.shift());

const arr = input[0].split(" ").map(Number);

let left = 0;
let right = N - 1;
let min = Infinity;
let answer = [];

while (left < right) {
  if (Math.abs(arr[left] + arr[right]) < min) {
    min = Math.abs(arr[left] + arr[right]);
    answer = [arr[left], arr[right]];
  }

  if (arr[left] + arr[right] > 0) {
    right = right - 1;
  } else if (arr[left] + arr[right] < 0) {
    left = left + 1;
  } else {
    break;
  }
}

console.log(answer.join(" "));

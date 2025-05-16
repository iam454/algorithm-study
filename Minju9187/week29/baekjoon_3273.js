let fs = require("fs");
const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./1.txt")
  .toString()
  .trim()
  .split("\n");

const n = Number(input.shift());
const arr = input.shift().split(" ").map(Number);
const x = +input.shift();

arr.sort((a, b) => a - b);

let answer = 0;
let left = 0;
let right = arr.length - 1;

while (left < right) {
  if (arr[left] + arr[right] === x) {
    answer++;
    left++;
    right--;
  } else if (arr[left] + arr[right] < x) {
    left++;
  } else {
    right--;
  }
}

console.log(answer);

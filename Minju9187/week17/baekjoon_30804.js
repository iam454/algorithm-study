let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
// let input = fs.readFileSync("1.txt").toString().split("\n");

const N = Number(input.shift());

const arr = input[0].split(" ").map(Number);

let max = 1;
let left = 0;
let right = 0;
let count = 1;
let kind = 1;
let fruitCount = new Array(10).fill(0);
fruitCount[arr[right]]++;

while (right < N - 1) {
  right++;
  if (fruitCount[arr[right]] === 0) {
    kind++;
  }
  fruitCount[arr[right]]++;
  count++;

  if (kind > 2) {
    while (kind > 2) {
      fruitCount[arr[left]]--;
      if (fruitCount[arr[left]] === 0) {
        kind--;
      }
      count--;
      left++;
    }
  }
  max = max < count ? count : max;
}

console.log(max);

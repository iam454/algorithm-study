let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
// let input = fs.readFileSync("2.txt").toString().split("\n");

const [N, K] = input.shift().split(" ").map(Number);
let answer = 0;

const catWeights = input[0]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

let left = 0;
let right = catWeights.length - 1;

while (left < right) {
  if (catWeights[left] + catWeights[right] <= K) {
    answer++;
    left++;
    right--;
  } else {
    right--;
  }
}

console.log(answer);

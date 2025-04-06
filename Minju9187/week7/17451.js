let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
// let input = fs.readFileSync("1.txt").toString().split("\n");

const n = input.shift();
const arr = input[0].split(" ").map(Number);

let result = arr[n - 1];
for (let i = n - 1; i > 0; i--) {
  if (result <= arr[i - 1]) {
    result = arr[i - 1];
  } else {
    const multiplier = Math.ceil(result / arr[i - 1]);
    result = arr[i - 1] * multiplier;
  }
}

console.log(result);

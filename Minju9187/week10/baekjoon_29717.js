let fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let input = fs.readFileSync("2.txt").toString().split("\n");

const T = input.shift();

for (let i = 0; i < T; i++) {
  checkLevel(BigInt(input[i].trim()));
}

function checkLevel(num) {
  const totalExp = (num * (num + 1n)) / 2n;
  let left = 1n;
  let right = 1000000000n;

  while (left <= right) {
    const mid = (left + right) / 2n;
    if (mid * (mid + 1n) <= totalExp) {
      left = mid + 1n;
    } else {
      right = mid - 1n;
    }
  }

  console.log(left.toString());
}

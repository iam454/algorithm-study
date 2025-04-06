let fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let input = fs.readFileSync("1.txt").toString().trim().split("\n");

const N = Number(input.shift());
const arr = input[0]
  .split(" ")
  .map(Number)
  .sort((a, b) => b - a);
let answer = 0;

while (arr.length > 1) {
  answer++;
  let maxA = arr.shift() - 1;
  let maxB = arr.shift() - 1;

  if (maxA > 0) arr.push(maxA);
  if (maxB > 0) arr.push(maxB);

  arr.sort((a, b) => b - a);

  if (answer > 1440) {
    return console.log(-1);
  }
}

if (arr.length === 1) {
  answer += arr[0];
}

console.log(answer > 1440 ? -1 : answer);
// let left = 0;
// let right = N - 1;
// let answer = 0;

// while (left < right) {
//   arr[left]--;
//   arr[right]--;
//   answer++;

//   if (arr[left] === 0) {
//     left++;
//   }
//   if (arr[right] === 0) {
//     right--;
//   }
// }

// answer += arr[right];

// console.log(answer > 1440 ? -1 : answer);

const fs = require("fs");

const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, C] = input[0].split(" ").map(Number);
const arr = input[1].split(" ").map(Number);
const stack = [];
const map = new Map();

for (let i = 0; i < N; i++) {
  if (map.has(arr[i])) {
    map.set(arr[i], map.get(arr[i]) + 1);
  } else {
    stack.push(arr[i]);
    map.set(arr[i], 1);
  }
}

const sorted = stack.sort((a, b) => {
  if (map.get(a) === map.get(b)) {
    return 0;
  }
  return map.get(b) - map.get(a);
});

const result = [];

for (let i = 0; i < sorted.length; i++) {
  const num = sorted[i];
  const count = map.get(num);
  for (let j = 0; j < count; j++) {
    result.push(num);
  }
}

console.log(result.join(" "));

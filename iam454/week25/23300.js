const fs = require("fs");

const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, Q] = input.shift().split(" ").map(Number);
const tasks = input.map((item) => item.split(" "));

let current = null;
let back = [];
let front = [];

for (const task of tasks) {
  let op, target;
  if (task.length > 1) {
    op = task[0];
    target = task[1];
  } else {
    op = task[0];
  }

  if (op === "B") {
    if (back.length >= 1) {
      front.push(current);
      current = back.pop();
    }
  } else if (op === "F") {
    if (front.length >= 1) {
      back.push(current);
      current = front.pop();
    }
  } else if (op === "A") {
    front = [];
    if (current !== null) {
      back.push(current);
    }
    current = target;
  } else if (op === "C") {
    const compressed = [];
    for (let i = back.length - 1; i >= 0; i--) {
      if (
        compressed.length === 0 ||
        compressed[compressed.length - 1] !== back[i]
      ) {
        compressed.push(back[i]);
      }
    }
    back = compressed.reverse();
  }
}

console.log(current);
console.log(back.length ? back.reverse().join(" ") : "-1");
console.log(front.length ? front.reverse().join(" ") : "-1");

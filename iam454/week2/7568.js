const fs = require("fs");

const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const people = [];

input.shift();

input.forEach((line) => {
  const [w, h] = line.split(" ").map(Number);
  people.push({ w, h, rank: 1 });
});

for (let p of people) {
  for (let other of people) {
    if (p.w < other.w && p.h < other.h) {
      p.rank++;
    }
  }
}

console.log(people.map((p) => p.rank).join(" "));

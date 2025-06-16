const fs = require("fs");

const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const N = Number(input[0]);
const applicants = input[1].split(" ").map(Number);
const [T, P] = input[2].split(" ").map(Number);

let shirts = 0;

for (const app of applicants) {
  if (app >= T) {
    shirts += Math.ceil(app / T);
  } else if (app > 0) {
    shirts += 1;
  }
}

const pens = [0, 0];
pens[0] = Math.floor(N / P);
pens[1] = N % P;

console.log(shirts);
console.log(pens.join(" "));

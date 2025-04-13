const fs = require("fs");

const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const N = Number(input[0]);
const genes = input[1].split(" ");

const firstChars = [];
const secondChars = [];
const secondCount = new Array(26).fill(0);

for (const gene of genes) {
  const [first, second] = gene.split("");
  firstChars.push(first);
  secondChars.push(second);
  secondCount[second.charCodeAt(0) - 65] += 1;
}

const set = new Set();

for (let i = 0; i < N; i++) {
  const firstChar = firstChars[i];
  secondCount[secondChars[i].charCodeAt(0) - 65] -= 1;

  for (let j = 0; j < 26; j++) {
    if (secondCount[j] > 0) {
      const secondChar = String.fromCharCode(j + 65);
      set.add(firstChar > secondChar ? firstChar : secondChar);
    }
  }

  secondCount[secondChars[i].charCodeAt(0) - 65] += 1;
}

const result = Array.from(set).sort();
console.log(result.length);
console.log(result.join(" "));

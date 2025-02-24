const fs = require("fs");

const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const N = Number(input.shift());
const dic = [];

for (let i = 0; i < N; i++) {
  const word = input[i];
  let isPrefix = false;

  for (let j = 0; j < dic.length; j++) {
    if (word.startsWith(dic[j]) || dic[j].startsWith(word)) {
      dic[j] = word.length > dic[j].length ? word : dic[j];
      isPrefix = true;
      break;
    }
  }

  if (!isPrefix) {
    dic.push(word);
  }
}

console.log(dic.length);

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const lines = [];
rl.on("line", (line) => {
  lines.push(line);
}).on("close", () => {
  solution();
});

function solution() {
  const arr = lines.shift().split("");
  let str = "";
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] === "(") {
      if (arr[i + 1] === ")") {
        str += "(1";
      } else if (arr[i + 1] === "(") {
        str += "(";
      }
    } else if (arr[i] === ")") {
      if (arr[i + 1] === "(") {
        str += ")+";
      } else if (arr[i + 1] === ")") {
        str += ")";
      }
    }
  }
  str += ")";
  console.log(str);
}

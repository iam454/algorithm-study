let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

const [N, M] = input[0].split(" ").map(Number);

// const unheardPersonList = input.slice(1, N + 1);
// const unseenPersonList = input.slice(N + 1);
const unheardPersonList = new Set();
const unseenPersonList = new Set();
const unknownPersonList = [];

for (let i = 1; i < input.length; i++) {
  if (i <= N) unheardPersonList.add(input[i]);
  else unseenPersonList.add(input[i]);
}

unheardPersonList.forEach((v) => {
  if (unseenPersonList.has(v)) unknownPersonList.push(v);
});

unknownPersonList.sort();

console.log(unknownPersonList.length + "\n" + unknownPersonList.join("\n"));

let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
// let input = fs.readFileSync("3.txt").toString().split("\n");

const N = input.shift();

console.log(25 * N + 26);

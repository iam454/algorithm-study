let fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let input = fs.readFileSync("2.txt").toString().split("\n");

const N = Number(input.shift());

const tops = input[0].split(" ").map(Number);

const stack = [];
const result = [];

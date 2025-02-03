const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

readline.on('line', (line) => {
  input.push(line);
}).on('close', () => {
  const result = solution(input);
  console.log(result.join(" "));
  process.exit();
});

const solution = (input) => {
  const N= Number(input[0]);
  const tower = input[1].split(" ").map(Number);
  let stack = [];
  let result = [];

  for (let i = 0; i < N; i++) {
    while (stack.length > 0 && stack[stack.length-1][0] < tower[i]) {
      stack.pop();
    }
    result.push(stack.length > 0 ? stack[stack.length-1][1] : 0);

    stack.push([tower[i], i+1]);
  }

  return result;
}
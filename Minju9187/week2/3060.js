const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  solution(input);
});

function solution(input) {
  const T = input.shift();

  for (let i = 0; i < T; i++) {
    calcDay(input[2 * i], input[2 * i + 1]);
  }

  function calcDay(amount, data) {
    let cnt = 1;
    let sum = data
      .split(" ")
      .map(Number)
      .reduce((acc, current) => acc + current, 0);

    while (sum <= amount) {
      sum *= 4;
      cnt++;
    }
    console.log(cnt);
  }
}

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

readline.on('line', (line) => {
  input.push(line);
}).on('close', () => {
  const N = Number(input[0]);
  const result = solution(N, input[1].split(" ").map(Number));
  console.log(result);
  process.exit();
});

const solution = (N, rock) => {
  let DP = Array.from({ length: N }, () => Infinity);
  DP[0] = 0;

  for (let i = 0; i < N; i++) {
    for (let k = 0; k < i; k++) {
      DP[i] = Math.min(DP[i], Math.max(DP[k], (i-k)*(1+Math.abs(rock[i]-rock[k]))));
    }
  }

  return DP[N-1]; 
}
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

readline.on('line', (line) => {
  input.push(line);
}).on('close', () => {
  const result = solution(input);
  console.log(result.join("\n"));
  process.exit();
});

const solution = (input) => {
  const T = Number(input[0]);
  let result = [];

  for (let i = 1; i < T+1; i++) {
    const N = BigInt(input[i]);
    const totalExp = (N*(N+BigInt(1)))/BigInt(2);

    let left = BigInt(1), right = BigInt(10**9);
    while (left <= right) {
      const mid = (left+right)/BigInt(2);
      if (mid*(mid-BigInt(1)) <= totalExp) {
        left = mid+BigInt(1);
      } else {
        right = mid-BigInt(1);
      }
    }

    result.push(right);
  }

  return result;
}
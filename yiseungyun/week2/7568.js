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
  const N = Number(input[0]);
  let persons = [];
  let result = Array(N).fill(0);

  for (let i = 1; i < N+1; i++) {
    const [weight, height] = input[i].split(" ").map(Number);
    persons.push([i, weight, height]);
  }

  for (let i = 0; i < N; i++) {
    let count = 0;
    for (let j = 0; j < N; j++) {
      if (i !== j && persons[i][1] < persons[j][1] && persons[i][2] < persons[j][2]) {
        count++;
      }
    }
    result[i] = count+1;
  }
  
  return result;
}
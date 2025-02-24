const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];
let T;

readline.on('line', (line) => {
  input.push(line);
}).on('close', () => {
  T = Number(input[0]);
  const result = solution(input.slice(1));
  console.log(result.join('\n'));
  process.exit();
});

const solution = (input) => {
  let index = 0;
  let result = [];

  for (let i = 0; i < T; i++) {
    const [W, N] = input[index++].split(' ').map(Number);
    let info = [];
    for (let j = 0; j < N; j++) {
      info.push(input[index+j].split(' ').map(Number));
    }

    index += N;

    let move = 0;
    let car = 0;
    let k = 0;
    let loc, trash;
    while (k < N) {
      [loc, trash] = info[k];
      if (car+trash < W) { 
        car += trash; 
        k++; 
      } else if (car+trash === W) {
        move += 2*loc; 
        car = 0;
        k++; 
      } else {
        move += 2*loc; 
        car = 0; 
      }
    }

    if (car > 0) {
      move += loc*2;
    }

    result.push(move);
  }

  return result;
}

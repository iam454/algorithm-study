const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
let [num, rods] = fs.readFileSync(filePath).toString().trim().split('\n');
rods = rods.split(' ').map((n) => parseInt(n));
rods.sort();

const split = (head, tail) => {
    if ((tail - 1) - head === 1) return [rods[tail - 1] * rods[head], rods[tail - 1] + rods[head]];
    if ((tail - 1) === head) return [0, rods[head]];
    const mid = Math.ceil((tail - head)/2);
    const [front_multiply, front_sum] = split(head, head+mid);
    const [rear_multiply, rear_sum] = split(head+mid, tail);
    return [front_multiply + rear_multiply + (front_sum * rear_sum), front_sum + rear_sum];
}

console.log(split(0, rods.length)[0]);


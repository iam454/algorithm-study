const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];
rl.on('line', function (line) {
    line = line.split(' ').map((n) => parseInt(n));
    input.push(line);
}).on('close', function (){
    solution(input);
});

function solution(input) {
    let [n, ...people] = input;
    const ans = [];
    for (let i = 0; i < people.length; i++) {
        let k = 1;
        const person = people[i];
        for (let j = 0; j < people.length; j++) {
            const oppo = people[j];
            if(person[0] < oppo[0] && person[1] < oppo[1]) k += 1;
        }
        ans.push(k);
    }
    console.log(ans.join(' '));
}

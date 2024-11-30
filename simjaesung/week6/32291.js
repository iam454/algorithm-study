//K+1의 공약수를 구하면 되는 문제
let input = require('fs').readFileSync('/dev/stdin').toString().trim();
let k = +input;
const ans = [];

const find = (m) => {
    for(let i = 1; i<=Math.sqrt(m); i++){
        if(m % i === 0) {
            ans.push(i);
            if(i != m/i) ans.push(m/i);
        }
    }
    ans.sort((a,b)=>a-b);
    ans.pop();
}

const sol = () => {
    find(k+1);
    console.log(ans.join(' '));
}
sol();
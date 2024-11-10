let input = require('fs').readFileSync(0, 'utf-8').toString().trim().split('\n');
const [S,n,...data] = input;
const obj = {};
obj[-1] = new Array(26).fill(0);

const init = () => {
    for(let i = 0; i<S.length; i++) {
        obj[i] = [...obj[i-1]];
        const c = S[i].charCodeAt() - 97;
        obj[i][c]++;
    }
}

const sol = () => {
    init();
    const result = [];
    for(let i = 0; i<n; i++){
        const [a,l,r] = data[i].split(' ').map(x => !isNaN(x)? +x : x);
        const c = a.charCodeAt() - 97;
        result.push(obj[r][c] - obj[l-1][c]);
    }
    console.log(result.join('\n'));
}

sol();
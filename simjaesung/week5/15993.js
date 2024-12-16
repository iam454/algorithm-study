let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(item => +item);
const n = input.shift();
const arr = new Array(2).fill().map(() => new Array(100005).fill(0));

//0 : 홀수, 1: 짝수
const dp = () => {
    arr[0][1] = 1;
    [arr[0][2], arr[1][2]] = [1,1];
    [arr[0][3], arr[1][3]] = [2,2];

    for(let i = 4; i<100005; i++){
        arr[0][i] = (arr[1][i-3] + arr[1][i-2] + arr[1][i-1]) % 1000000009;
        arr[1][i] = (arr[0][i-3] + arr[0][i-2] + arr[0][i-1]) % 1000000009;
    }
}

const sol = () => {
    dp();
    for(let i = 0; i < n; i++){
        const k = input[i];
        console.log(arr[0][k], arr[1][k]);
    }
}
sol();
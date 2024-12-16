let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map((el)=>el.split(' ').map(i => +i));
const [n,k,q] = input.shift();
const [X,Q] = [input[0],input[1]];
const arr = new Array(100005).fill(0);
const accSum = new Array(100005).fill(0);

//연속 인터뷰 대상 dp
const dp = () =>{
    for(let i = 0; i < n; i++){
        if(X[i] !== k) arr[i + 1] = arr[i] + 1;
    }
}

//누적합
const getAccSum = () => {
    for(let i = 0; i<n; i++){
        accSum[i + 1] = accSum[i] + arr[i + 1];
    }
}

const sol = () => {
    dp();
    getAccSum();

    for(let i = 0; i < q; i++)
        console.log(accSum[Q[i]]);
}
sol();
let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let [n,m] = input.shift().split(' ').map((item)=>+item);
const arr = input.shift().split(' ').map((item)=>+item);
let ans = 0;

const sol = () => {
    for(let i = 0; i < n; i++){
        if(Math.abs(arr[i] - arr[i+1]) < m){
            ans++;
            i += 1;
        }
    }
    console.log(ans);
}
sol();
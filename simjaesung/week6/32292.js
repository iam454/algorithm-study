let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let t = +input.shift();

const ABB_to_BA = (n,s) =>{
    while(true){
        let find = s.search('ABB');
        if(find === -1) break;
        s = s.replace('ABB','BA');
    }
    console.log(s);
}

const sol = () => {
    for(let i = 0; i < t * 2; i += 2){
        ABB_to_BA(+input[i],input[i+1]);
    }
}
sol();
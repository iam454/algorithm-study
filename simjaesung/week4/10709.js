let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let [h,w] = input.shift().split(' ').map((item)=>+item);

const sol = () => {
    for(let i = 0; i<h; i++){
        let tmp = input[i].split('');
        let rain = -1;
        let el = "";
        for(let j = 0; j<w; j++){
            if(tmp[j] == 'c') rain = 0;
            else if(tmp[j] == '.'){
                if(rain != -1) rain++;
            }
            el+=rain+' ';
        }
        console.log(el);
    }
}
sol();
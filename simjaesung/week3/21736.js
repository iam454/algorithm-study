let input = require('fs').readFileSync(0, 'utf-8').toString().trim().split('\n');
const [n,m] = input.shift().split(' ').map(item => +item);
const arr = input.map(item => item.split(''));
const visited = new Array(605).fill().map(()=>new Array(605).fill(0));
const dx = [-1,1,0,0];
const dy = [0,0,-1,1];
let ans = 0;

const findI = () => {
    for(let i = 0; i<n; i++){
        for(let j = 0; j<m; j++)
            if(arr[i][j] === 'I') return [i,j];
    }
}

const inrange = (x,y) => {
    return x >= 0 && y >= 0 && x < n && y < m;
}

const bfs = (x,y) => {
    visited[x][y] = 1;
    if (arr[x][y] === 'P') ans++;
    for(let i = 0; i<4; i++){
        let [nx,ny] = [x + dx[i], y + dy[i]];
        if(!inrange(nx,ny)) continue;
        if(visited[nx][ny] || arr[nx][ny] === 'X') continue;
        bfs(nx,ny);
    }
}

const sol = () => {
    const [a,b] = findI();
    bfs(a,b)
    ans ? console.log(ans) : console.log('TT');
}

sol();
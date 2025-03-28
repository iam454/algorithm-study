function solution(board) {
  let dx = [1, -1, 0, 0];
  let dy = [0, 0, 1, -1];
  const bfs = (y, x) => {
    let visited = Array(board.length)
      .fill(0)
      .map(() => Array(board[0].length).fill(false));
    visited[y][x] = true;
    let cnt = 0;
    let queue = [[y, x]];
    while (queue.length > 0) {
      let len = queue.length;
      for (let i = 0; i < len; i++) {
        let curr = queue.shift();
        if (board[curr[0]][curr[1]] === "G") return cnt;
        for (let j = 0; j < 4; j++) {
          let ny = curr[0];
          let nx = curr[1];
          while (true) {
            if (
              ny + dy[j] < 0 ||
              nx + dx[j] < 0 ||
              ny + dy[j] >= board.length ||
              nx + dx[j] >= board[0].length ||
              board[ny + dy[j]][nx + dx[j]] === "D"
            )
              break;
            ny += dy[j];
            nx += dx[j];
          }
          if (visited[ny][nx]) continue;
          queue.push([ny, nx]);
          visited[ny][nx] = true;
        }
      }
      cnt++;
    }
    return -1;
  };
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j] === "R") return bfs(i, j);
    }
  }
}

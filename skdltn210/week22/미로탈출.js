function solution(maps) {
  let arr = [];
  for (let map of maps) {
    arr.push(map.split(""));
  }
  let dy = [1, -1, 0, 0];
  let dx = [0, 0, 1, -1];

  const bfs = (y, x, endY, endX) => {
    let visited = Array(arr.length)
      .fill(0)
      .map(() => Array(arr[0].length).fill(false));
    let cnt = 0;
    visited[y][x] = true;
    let queue = [[y, x]];
    while (queue.length > 0) {
      let len = queue.length;
      for (let i = 0; i < len; i++) {
        let curr = queue.shift();
        if (curr[0] === endY && curr[1] === endX) return cnt;
        for (let j = 0; j < 4; j++) {
          let ny = curr[0] + dy[j];
          let nx = curr[1] + dx[j];
          if (ny >= arr.length || nx >= arr[0].length || ny < 0 || nx < 0)
            continue;
          if (visited[ny][nx] || arr[ny][nx] === "X") continue;
          visited[ny][nx] = true;
          queue.push([ny, nx]);
        }
      }
      cnt++;
    }
    return -1;
  };
  let sy, sx, ly, lx, ey, ex;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[0].length; j++) {
      if (arr[i][j] === "S") {
        sy = i;
        sx = j;
      } else if (arr[i][j] === "L") {
        ly = i;
        lx = j;
      } else if (arr[i][j] === "E") {
        ey = i;
        ex = j;
      }
    }
  }
  let lever = 0;
  let exit = 0;
  lever += bfs(sy, sx, ly, lx);
  if (lever === -1) return -1;
  exit += bfs(ly, lx, ey, ex);
  if (exit === -1) return -1;
  return lever + exit;
}

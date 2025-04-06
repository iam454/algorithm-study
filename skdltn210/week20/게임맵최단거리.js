function solution(maps) {
  let cnt = 0;
  let dx = [0, 0, 1, -1];
  let dy = [1, -1, 0, 0];
  const bfs = () => {
    const queue = [[0, 0]];
    maps[0][0] = 0;
    while (queue.length > 0) {
      let len = queue.length;
      cnt++;
      for (let i = 0; i < len; i++) {
        let [y, x] = queue.shift();
        if (y === maps.length - 1 && x === maps[0].length - 1) return cnt;
        for (let j = 0; j < 4; j++) {
          let ny = y + dy[j];
          let nx = x + dx[j];
          if (
            ny < 0 ||
            nx < 0 ||
            ny >= maps.length ||
            nx >= maps[0].length ||
            maps[ny][nx] === 0
          )
            continue;
          maps[ny][nx] = 0;
          queue.push([ny, nx]);
        }
      }
    }
    return -1;
  };
  return bfs();
}

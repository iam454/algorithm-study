function solution(land) {
  let answer = 0;
  const n = land.length;
  const m = land[0].length;

  const oils = Array.from({ length: n }, () => new Array(m).fill(-1));
  const visited = Array.from({ length: n }, () => new Array(m).fill(0));
  let oilId = 0;
  const oilMap = new Map();

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (land[i][j] === 1 && visited[i][j] === 0) {
        const oilCnt = bfs(i, j, oils, visited, land, oilId);
        oilMap.set(oilId, oilCnt);
        oilId += 1;
      }
    }
  }

  function bfs(x, y, oils, visited, land, oilId) {
    const q = [];
    q.push([x, y]);
    visited[x][y] = 1;
    oils[x][y] = oilId;
    let oilCnt = 1;
    const dx = [-1, 1, 0, 0];
    const dy = [0, 0, -1, 1];

    while (q.length) {
      const [cx, cy] = q.shift();

      for (let i = 0; i < 4; i++) {
        const nx = cx + dx[i];
        const ny = cy + dy[i];

        if (nx >= 0 && nx < n && ny >= 0 && ny < m) {
          if (land[nx][ny] === 1 && visited[nx][ny] === 0) {
            q.push([nx, ny]);
            visited[nx][ny] = 1;
            oils[nx][ny] = oilId;
            oilCnt += 1;
          }
        }
      }
    }

    return oilCnt;
  }

  const pipes = Array.from({ length: m }, () => new Set());

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (land[j][i] === 1) {
        pipes[i].add(oils[j][i]);
      }
    }
  }

  pipes.forEach((pipe) => {
    let oilCnt = 0;
    for (const oilId of pipe) {
      oilCnt += oilMap.get(oilId);
    }
    answer = Math.max(answer, oilCnt);
  });

  return answer;
}

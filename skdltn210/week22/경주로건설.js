function solution(board) {
  const n = board.length;
  const costs = Array(n)
    .fill()
    .map(() =>
      Array(n)
        .fill()
        .map(() => Array(2).fill(Infinity))
    );
  costs[0][0][0] = 0;
  costs[0][0][1] = 0;
  const dx = [1, -1, 0, 0];
  const dy = [0, 0, 1, -1];
  const queue = [
    [0, 0, 0],
    [0, 0, 1],
  ];

  while (queue.length > 0) {
    const [y, x, dir] = queue.shift();
    const currentCost = costs[y][x][dir];
    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];
      if (ny < 0 || nx < 0 || ny >= n || nx >= n || board[ny][nx] === 1) {
        continue;
      }
      const nextDir = i < 2 ? 0 : 1;
      const additionalCost = dir === nextDir ? 100 : 600;
      const newCost = currentCost + additionalCost;
      if (newCost < costs[ny][nx][nextDir]) {
        costs[ny][nx][nextDir] = newCost;
        queue.push([ny, nx, nextDir]);
      }
    }
  }
  return Math.min(costs[n - 1][n - 1][0], costs[n - 1][n - 1][1]);
}

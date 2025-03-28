function solution(n, m, x, y, r, c, k) {
  const dx = [1, 0, 0, -1];
  const dy = [0, -1, 1, 0];
  const dir = ["d", "l", "r", "u"];
  const getManhattanDistance = (currX, currY) => {
    return Math.abs(r - currX) + Math.abs(c - currY);
  };
  const initialDistance = getManhattanDistance(x, y);
  if (initialDistance > k) return "impossible";
  if ((k - initialDistance) % 2 !== 0) return "impossible";
  let result = "impossible";
  const dfs = (currX, currY, path) => {
    if (result !== "impossible") return;
    if (path.length === k) {
      if (currX === r && currY === c) {
        result = path;
      }
      return;
    }
    const remainingMoves = k - path.length;
    const distanceToTarget = getManhattanDistance(currX, currY);
    if (distanceToTarget > remainingMoves) return;
    if ((remainingMoves - distanceToTarget) % 2 !== 0) return;
    for (let i = 0; i < 4; i++) {
      const nx = currX + dx[i];
      const ny = currY + dy[i];
      if (nx < 1 || ny < 1 || nx > n || ny > m) continue;
      dfs(nx, ny, path + dir[i]);
      if (result !== "impossible") return;
    }
  };
  dfs(x, y, "");
  return result;
}

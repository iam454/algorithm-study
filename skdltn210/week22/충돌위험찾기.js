function solution(points, routes) {
  let ans = 0;
  let arrivedRobots = 0;
  let maxR = Math.max(...points.map((p) => p[0]));
  let maxC = Math.max(...points.map((p) => p[1]));
  let arr = Array.from({ length: maxR + 1 }, () => Array(maxC + 1).fill(0));
  let robots = [];
  let idx = Array(routes.length).fill(1);

  for (let i = 0; i < routes.length; i++) {
    let [r, c] = points[routes[i][0] - 1];
    robots.push([r, c]);
    arr[r][c]++;
  }

  const findCollisions = () => {
    let cnt = 0;
    for (let r = 1; r <= maxR; r++) {
      for (let c = 1; c <= maxC; c++) {
        if (arr[r][c] > 1) cnt++;
      }
    }
    return cnt;
  };
  ans += findCollisions();
  while (arrivedRobots < routes.length) {
    for (let i = 0; i < routes.length; i++) {
      if (idx[i] >= routes[i].length) continue;
      if (robots[i][0] === -1 && robots[i][1] === -1) continue;

      let [cr, cc] = robots[i];
      let [tr, tc] = points[routes[i][idx[i]] - 1];

      arr[cr][cc]--;

      if (cr !== tr) {
        robots[i][0] += cr < tr ? 1 : -1;
      } else if (cc !== tc) {
        robots[i][1] += cc < tc ? 1 : -1;
      }

      let [nr, nc] = robots[i];
      arr[nr][nc]++;

      if (nr === tr && nc === tc) idx[i]++;
    }
    ans += findCollisions();
    for (let i = 0; i < routes.length; i++) {
      if (robots[i][0] === -1 && robots[i][1] === -1) continue;
      if (idx[i] === routes[i].length) {
        arrivedRobots++;
        arr[robots[i][0]][robots[i][1]]--;
        robots[i] = [-1, -1];
      }
    }
  }

  return ans;
}

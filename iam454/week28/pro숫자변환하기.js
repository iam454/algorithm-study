function solution(x, y, n) {
  const visited = new Set();
  const q = [];
  q.push([y, 0]);

  while (q.length) {
    const [cur, cnt] = q.shift();

    if (cur === x) {
      return cnt;
    }

    if (cur < x || visited.has(cur)) {
      continue;
    }

    visited.add(cur);

    q.push([cur - n, cnt + 1]);
    q.push([cur % 2 === 0 ? cur / 2 : 0, cnt + 1]);
    q.push([cur % 3 === 0 ? cur / 3 : 0, cnt + 1]);
  }

  return -1;
}

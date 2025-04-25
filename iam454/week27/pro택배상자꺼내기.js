function solution(n, w, num) {
  let answer = 0;
  const r = Math.ceil(n / w);
  const board = Array.from({ length: r }, () => new Array(w).fill(0));

  let cnt = 1;

  for (let i = 0; i < r; i++) {
    for (let j = 0; j < w; j++) {
      if (cnt > n) {
        break;
      }
      if (i % 2 === 1) {
        board[i][w - j - 1] = cnt++;
      } else {
        board[i][j] = cnt++;
      }
    }
    if (cnt > n) {
      break;
    }
  }

  let tx, ty;
  for (let i = 0; i < r; i++) {
    for (let j = 0; j < w; j++) {
      if (board[i][j] === num) {
        tx = i;
        ty = j;
        break;
      }
    }
    if (tx !== undefined && ty !== undefined) {
      break;
    }
  }

  for (let i = tx; i < r; i++) {
    if (board[i][ty] !== 0) {
      answer += 1;
    }
  }

  return answer;
}

function timeToMin(time) {
  let min = [];
  let start = time[0].split(":").map(Number);
  let end = time[1].split(":").map(Number);
  min.push(start[0] * 60 + start[1]);
  min.push(end[0] * 60 + end[1] + 10);
  return min;
}

function solution(book_time) {
  let time = [];
  for (let bt of book_time) {
    time.push(timeToMin(bt));
  }
  time.sort((a, b) => a[1] - b[1]);
  let min = 0;
  for (let i = 0; i <= 1440; i++) {
    let cnt = 0;
    for (let t of time) {
      if (t[0] < i && t[1] >= i) cnt++;
    }
    min = Math.max(min, cnt);
  }
  return min;
}

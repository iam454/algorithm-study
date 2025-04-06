function solution(queue1, queue2) {
  let cnt = 0;
  let q1 = 0;
  let q2 = 0;
  let idx1 = 0;
  let idx2 = 0;
  for (let n of queue1) q1 += n;
  for (let n of queue2) q2 += n;
  if ((q1 + q2) % 2 === 1) return -1;
  while (true) {
    if (q1 > q2) {
      q1 -= queue1[idx1];
      q2 += queue1[idx1];
      queue2.push(queue1[idx1]);
      idx1++;
      cnt++;
    } else if (q1 < q2) {
      q2 -= queue2[idx2];
      q1 += queue2[idx2];
      queue1.push(queue2[idx2]);
      idx2++;
      cnt++;
    } else {
      return cnt;
    }
    if (idx1 > 300001 || idx2 > 300001) return -1;
  }
}

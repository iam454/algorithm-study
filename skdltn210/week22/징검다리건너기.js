function solution(stones, k) {
  let left = 0;
  let right = 200000000;
  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    let cnt = 0;
    let flag = true;
    for (let i = 0; i < stones.length; i++) {
      if (stones[i] <= mid) cnt++;
      else cnt = 0;
      if (cnt >= k) {
        flag = false;
        break;
      }
    }
    if (flag) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return left;
}

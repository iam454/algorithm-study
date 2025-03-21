function solution(n, times) {
  times.sort((a, b) => a - b);
  const isAvailable = (mid) => {
    let cnt = 0;
    for (let time of times) {
      cnt += Math.floor(mid / time);
    }
    if (cnt >= n) return true;
    else return false;
  };
  let left = 0;
  let right = times[times.length - 1] * n;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (isAvailable(mid)) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return left;
}

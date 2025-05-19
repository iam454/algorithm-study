function solution(distance, rocks, n) {
  rocks.sort((a, b) => a - b);
  rocks.push(distance);

  let l = 1;
  let r = distance;
  let ans = 0;

  while (l <= r) {
    const mid = Math.floor((l + r) / 2);
    let prev = 0;
    let removed = 0;

    for (let i = 0; i < rocks.length; i++) {
      if (rocks[i] - prev < mid) {
        removed += 1;
      } else {
        prev = rocks[i];
      }
    }

    if (removed > n) {
      r = mid - 1;
    } else {
      ans = mid;
      l = mid + 1;
    }
  }

  return ans;
}

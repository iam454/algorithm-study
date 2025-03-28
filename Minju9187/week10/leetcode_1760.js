var minimumSize = function (nums, maxOperations) {
  let n = nums.length;
  let left = 1;
  let right = Math.max(...nums);

  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    let cnt = 0;

    for (let i = 0; i < n; i++) {
      cnt += Math.floor((nums[i] - 1) / mid);
    }

    if (cnt <= maxOperations) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }

  return left;
};

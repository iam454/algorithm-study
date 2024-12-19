var getFinalState = function (nums, k, multiplier) {
  for (let i = 0; i < k; i++) {
    let min = Infinity;
    let idx = 0;

    for (let j = 0; j < nums.length; j++) {
      if (nums[j] < min) {
        min = nums[j];
        idx = j;
      }
    }
    nums[idx] *= multiplier;
  }
  return nums;
};

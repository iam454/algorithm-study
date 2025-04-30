/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countSubarrays = function (nums, k) {
  const max = Math.max(...nums);
  const len = nums.length;
  let ans = 0;
  let l = 0;
  let maxCnt = 0;

  for (let r = 0; r < len; r++) {
    if (nums[r] === max) {
      maxCnt += 1;
    }
    while (maxCnt >= k) {
      ans += len - r;
      if (nums[l] === max) {
        maxCnt -= 1;
      }
      l += 1;
    }
  }

  return ans;
};

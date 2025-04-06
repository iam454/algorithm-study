/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
  let left = 0;
  let right = nums.reduce((a, b) => a + b, 0);
  right -= nums[0];
  if (right === 0) return 0;
  for (let i = 1; i < nums.length; i++) {
    right -= nums[i];
    left += nums[i - 1];
    if (left === right) {
      return i;
    }
  }
  return -1;
};

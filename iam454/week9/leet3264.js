/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} multiplier
 * @return {number[]}
 */
var getFinalState = function (nums, k, multiplier) {
  while (k > 0) {
    const min = Math.min(...nums);
    const index = nums.findIndex((num) => num === min);
    nums[index] *= multiplier;
    k -= 1;
  }

  return nums;
};

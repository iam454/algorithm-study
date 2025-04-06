/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
  let pivot = 0;
  let left = 0, right = sumOfArray(1, nums.length, nums);
  while (pivot < nums.length) {
      if (left === right) return pivot;
      left += nums[pivot];
      right -= nums[pivot+1];
      pivot++;
  }
  return -1;
};

function sumOfArray(start, end, array) {
  let sum = 0;
  for (let i = start; i < end; i++) {
      sum += array[i];
  }
  return sum;
}
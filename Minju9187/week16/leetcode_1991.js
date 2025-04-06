var findMiddleIndex = function (nums) {
  const sum = nums.reduce((acc, cur) => acc + cur, 0);

  let left = 0;
  let right = sum - nums[0];

  if (left === right) return 0;

  for (let i = 1; i < nums.length; i++) {
    left += nums[i - 1];
    right -= nums[i];
    if (left === right) return i;
  }

  return -1;
};

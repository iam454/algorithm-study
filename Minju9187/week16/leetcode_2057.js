var smallestEqual = function (nums) {
  let min = nums.length + 1;
  for (let i = 0; i < nums.length; i++) {
    if (i % 10 === nums[i]) {
      if (min > i) min = i;
    }
  }
  if (min === nums.length + 1) return -1;
  else return min;
};

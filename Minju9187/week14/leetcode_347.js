var topKFrequent = function (nums, k) {
  const numObj = {};
  const result = [];
  for (let i = 0; i < nums.length; i++) {
    if (!numObj[nums[i]]) {
      numObj[nums[i]] = 1;
    } else {
      numObj[nums[i]]++;
    }
  }
  const arr = Object.entries(numObj);

  arr.sort((a, b) => b[1] - a[1]);

  for (let i = 0; i < k; i++) {
    result.push(Number(arr[i][0]));
  }

  return result;
};

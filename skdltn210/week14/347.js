/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  const freq = {};
  for (let i = 0; i < nums.length; i++) {
    if (!freq[nums[i]]) {
      freq[nums[i]] = 1;
    } else {
      freq[nums[i]]++;
    }
  }
  const arr = Object.entries(freq).sort((a, b) => b[1] - a[1]);
  const ans = [];
  for (let i = 0; i < k; i++) {
    ans.push(parseInt(arr[i][0]));
  }
  return ans;
};

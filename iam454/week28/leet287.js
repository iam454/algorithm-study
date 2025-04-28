/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
  const map = new Map();
  let ans = 0;
  for (const num of nums) {
    if (map.has(num)) {
      ans = num;
      break;
    }
    map.set(num, true);
  }
  return ans;
};

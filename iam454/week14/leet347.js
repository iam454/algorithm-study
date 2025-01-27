/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  let map = new Map();

  nums.forEach((num) => {
    if (map.has(num)) {
      map.set(num, map.get(num) + 1);
    } else {
      map.set(num, 0);
    }
  });

  const ans = Array.from(map)
    .sort((a, b) => b[1] - a[1])
    .map((item) => item[0])
    .slice(0, k);

  return ans;
};

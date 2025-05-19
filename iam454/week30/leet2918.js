/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var minSum = function (nums1, nums2) {
  let zeroCnt1 = 0;
  let zeroCnt2 = 0;
  let sum1 = 0;
  let sum2 = 0;
  for (const num of nums1) {
    if (num === 0) {
      zeroCnt1 += 1;
      sum1 += 1;
    }
    sum1 += num;
  }
  for (const num of nums2) {
    if (num === 0) {
      zeroCnt2 += 1;
      sum2 += 1;
    }
    sum2 += num;
  }

  if ((zeroCnt1 === 0 && sum1 < sum2) || (zeroCnt2 === 0 && sum1 > sum2)) {
    return -1;
  }

  return Math.max(sum1, sum2);
};

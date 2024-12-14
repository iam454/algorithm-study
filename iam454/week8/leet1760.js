/**
 * @param {number[]} nums
 * @param {number} maxOperations
 * @return {number}
 */
var minimumSize = function (nums, maxOperations) {
  const canDivide = (penalty) => {
    let totalOps = 0;
    for (const num of nums) {
      totalOps += Math.ceil(num / penalty) - 1;
      if (totalOps > maxOperations) {
        return false;
      }
    }

    return true;
  };

  let l = 1;
  let r = Math.max(...nums);
  let ans = 0;

  while (l <= r) {
    let mid = Math.floor((l + r) / 2);
    if (canDivide(mid)) {
      ans = mid;
      r = mid - 1;
    } else {
      l = mid + 1;
    }
  }

  return ans;
};

/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  if (height.length <= 2) return 0;

  let left = 0;
  let right = height.length - 1;
  let leftHeight = 0;
  let rightHeight = 0;
  let cnt = 0;

  while (left < right) {
    leftHeight = Math.max(leftHeight, height[left]);
    rightHeight = Math.max(rightHeight, height[right]);

    if (leftHeight < rightHeight) {
      cnt += Math.max(0, leftHeight - height[left]);
      left++;
    } else {
      cnt += Math.max(0, rightHeight - height[right]);
      right--;
    }
  }

  return cnt;
};

/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  const N = height.length;
  let leftIndex = 0;
  let rightIndex = N - 1;
  let leftMaxHeight = height[leftIndex];
  let rightMaxHeight = height[rightIndex];
  let answer = 0;

  while (leftIndex < rightIndex) {
    if (leftMaxHeight < rightMaxHeight) {
      leftIndex += 1;
      leftMaxHeight = Math.max(leftMaxHeight, height[leftIndex]);
      answer += leftMaxHeight - height[leftIndex];
    } else {
      rightIndex -= 1;
      rightMaxHeight = Math.max(rightMaxHeight, height[rightIndex]);
      answer += rightMaxHeight - height[rightIndex];
    }
  }

  return answer;
};

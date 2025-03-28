// var trap = function (height) {
//   let result = 0;

//   const len = height.length;

//   const leftMax = new Array(len);
//   const rightMax = new Array(len);

//   leftMax[0] = height[0];
//   rightMax[len - 1] = height[len - 1];

//   for (let i = 1; i < len; i++) {
//     leftMax[i] = Math.max(leftMax[i - 1], height[i]);
//     rightMax[len - 1 - i] = Math.max(rightMax[len - i], height[len - 1 - i]);
//   }

//   for (let i = 0; i < len; i++) {
//     result += Math.min(leftMax[i], rightMax[i]) - height[i];
//   }

//   return result;
// };

var trap = function (height) {
  let result = 0;
  const len = height.length;
  let left = 0;
  let right = len - 1;
  let leftMax = height[left];
  let rightMax = height[right];

  while (left < right) {
    leftMax = Math.max(height[left], leftMax);
    rightMax = Math.max(height[right], rightMax);

    if (leftMax < rightMax) {
      result += leftMax - height[left];
      left += 1;
    } else {
      result += rightMax - height[right];
      right -= 1;
    }
  }

  return result;
};

console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));

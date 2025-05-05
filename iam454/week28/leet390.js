/**
 * @param {number} n
 * @return {number}
 */
var lastRemaining = function (n) {
  let head = 1;
  let step = 1;
  let leftToRight = true;

  while (n > 1) {
    if (leftToRight || n % 2 === 1) {
      head += step;
    }
    n = Math.floor(n / 2);
    step *= 2;
    leftToRight = !leftToRight;
  }

  return head;
};

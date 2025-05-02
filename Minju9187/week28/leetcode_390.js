/**
 * @param {number} n
 * @return {number}
 */
var lastRemaining = function (n) {
  let start = 1;
  let diff = 1;
  let direction = true;

  while (n > 1) {
    if (direction || n % 2 === 1) {
      start += diff;
    }
    n = Math.floor(n / 2);
    diff *= 2;
    direction = !direction;
  }
  return start;
};

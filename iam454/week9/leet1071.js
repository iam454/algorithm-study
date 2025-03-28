/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function (str1, str2) {
  if (str1 + str2 !== str2 + str1) {
    return "";
  }

  let large, small;

  if (str1.length >= str2.length) {
    large = str1;
    small = str2;
  } else {
    large = str2;
    small = str1;
  }

  function getGCD(a, b) {
    while (b > 0) {
      let r = a % b;
      a = b;
      b = r;
    }
    return a;
  }

  let gcd = getGCD(large.length, small.length);
  return large.slice(0, gcd);
};

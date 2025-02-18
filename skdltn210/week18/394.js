/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
  let str = s.split("");
  let stack = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "]") {
      let temp = "";
      while (stack[stack.length - 1] !== "[") {
        temp = stack.pop() + temp;
      }
      stack.pop();
      let num = "";
      while (stack.length && !isNaN(stack[stack.length - 1])) {
        num = stack.pop() + num;
      }
      stack.push(temp.repeat(Number(num)));
    } else {
      stack.push(str[i]);
    }
  }
  return stack.join("");
};

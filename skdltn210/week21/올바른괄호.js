function solution(s) {
  let stack = [];
  let str = s.split("");
  for (let i = 0; i < str.length; i++) {
    stack.push(str[i]);
    if (stack.length < 2) continue;
    if (stack[stack.length - 2] === "(" && stack[stack.length - 1] === ")") {
      stack.pop();
      stack.pop();
    }
  }
  if (stack.length === 0) return true;
  else return false;
}

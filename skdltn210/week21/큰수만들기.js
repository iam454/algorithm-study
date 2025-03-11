function solution(number, k) {
  const stack = [];
  let cnt = 0;

  for (let i = 0; i < number.length; i++) {
    const num = number[i];
    while (cnt < k && stack.length > 0 && stack[stack.length - 1] < num) {
      stack.pop();
      cnt++;
    }
    stack.push(num);
  }
  while (cnt < k && stack.length > 0) {
    stack.pop();
    cnt++;
  }

  return stack.join("");
}

function solution(numbers) {
  if (numbers.every((num) => num === 0)) return "0";
  let nums = numbers.map(String);
  nums.sort((a, b) => {
    return b + a - (a + b);
  });
  return nums.join("");
}

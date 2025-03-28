function solution(sizes) {
  let x = 0;
  let y = 0;
  for (let size of sizes) {
    if (size[0] < size[1]) {
      let temp = size[0];
      size[0] = size[1];
      size[1] = temp;
    }
    x = Math.max(x, size[0]);
    y = Math.max(y, size[1]);
  }
  return x * y;
}

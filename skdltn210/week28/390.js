var lastRemaining = function (n) {
  let left = 1;
  let remaining = n;
  let step = 1;
  let leftToRight = true;

  while (remaining > 1) {
    if (leftToRight || remaining % 2 === 1) {
      left += step;
    }

    remaining = Math.floor(remaining / 2);
    step *= 2;
    leftToRight = !leftToRight;
  }

  return left;
};

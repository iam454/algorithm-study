var decodeString = function (s) {
  let stack = [];
  let cnt = "";
  let str = "";

  s.split("").forEach((el) => {
    if (el >= "0" && el <= "9") {
      cnt += el;
    } else if (el === "[") {
      stack.push(str);
      stack.push(cnt);
      str = "";
      cnt = "";
    } else if (el === "]") {
      const prevCnt = stack.pop(cnt);
      const prevStr = stack.pop(str);
      str = prevStr + str.repeat(prevCnt);
    } else {
      str += el;
    }
  });

  console.log(str);
};

decodeString("3[a2[c]]");
